package com.example;

import android.support.annotation.Nullable;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;




import com.lwansbrough.RCTCamera.*;

import com.zmxv.RNSound.RNSoundPackage;

import com.ocetnik.timer.BackgroundTimerPackage;

// import cn.jpush.reactnativejpush.JPushPackage;



import com.zmxv.RNSound.RNSoundPackage;

// import java.util.*;


import java.util.List;

import java.util.ArrayList;

public class MainApplication extends NavigationApplication {
    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @Nullable
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {

        List<ReactPackage> list = new ArrayList<ReactPackage>(){
            {
                   add(new RCTCameraPackage());
                   add(new RNSoundPackage());
                   add(new BackgroundTimerPackage());
                   // add(new JPushPackage(SHUTDOWN_TOAST, SHUTDOWN_LOG));


            }
        };
       
        return list;

    }




    @Nullable
    @Override
    public String getJSMainModuleName() {
        return "index";
    }
}
