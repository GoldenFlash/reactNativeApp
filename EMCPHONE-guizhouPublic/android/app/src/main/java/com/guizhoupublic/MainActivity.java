
// import SplashScreen from 'react-native-splash-screen';
package com.guizhoupublic;

import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;

import com.facebook.react.ReactActivity;
import com.oblador.vectoricons.VectorIconsPackage;
import com.oblador.vectoricons.VectorIconsPackage;
// import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "guizhouPublic";
    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }
}
