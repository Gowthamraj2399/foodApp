package com.foodapp;
import expo.modules.ReactActivityDelegateWrapper;
import com.facebook.react.ReactActivityDelegate;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "foodApp";
  }
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
  super.onCreate(null);
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegateWrapper(this,
      new ReactActivityDelegate(this, getMainComponentName())
    );
  }
}
