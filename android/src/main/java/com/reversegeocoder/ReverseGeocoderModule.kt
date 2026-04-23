package com.reversegeocoder

import com.facebook.react.bridge.ReactApplicationContext

class ReverseGeocoderModule(reactContext: ReactApplicationContext) :
  NativeReverseGeocoderSpec(reactContext) {

  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }

  companion object {
    const val NAME = NativeReverseGeocoderSpec.NAME
  }
}
