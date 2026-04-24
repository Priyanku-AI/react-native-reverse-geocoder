package com.reversegeocoder

import android.location.Geocoder
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import java.util.Locale

class ReverseGeocoderModule(reactContext: ReactApplicationContext) :
    NativeReverseGeocoderSpec(reactContext) {

    override fun getName(): String = NAME

    override fun reverseGeocode(lat: Double, lng: Double, promise: Promise) {
        try {
            if (!Geocoder.isPresent()) {
                promise.reject("NOT_AVAILABLE", "Geocoder not available on this device")
                return
            }

            val geocoder = Geocoder(reactApplicationContext, Locale.getDefault())
            val addresses = geocoder.getFromLocation(lat, lng, 1)

            if (addresses.isNullOrEmpty()) {
                promise.reject("NOT_FOUND", "No address found for this location")
                return
            }

            val address = addresses[0]
            val result = Arguments.createMap().apply {
                putString("formattedAddress", address.getAddressLine(0))
                putString("city", address.locality)
                putString("state", address.adminArea)
                putString("country", address.countryName)
                putString("postalCode", address.postalCode)
            }

            promise.resolve(result)

        } catch (e: Exception) {
            promise.reject("ERROR", e.message)
        }
    }

    companion object {
        const val NAME = NativeReverseGeocoderSpec.NAME
    }
}