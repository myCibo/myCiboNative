import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Camera } from "expo-camera";
import { useIsFocused } from "@react-navigation/native";
import TabScanner from "../api/TabScanner";

const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    if (!isFocused && cameraRef) {
      cameraRef.pausePreview();
    }
    return () => {
      if (cameraRef) {
        cameraRef.resumePreview();
      }
    };
  }, [isFocused, cameraRef]);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePictureAndScan = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      navigation.navigate("ProcessingScreen");
      try {
        const result = await TabScanner.scanReceipt(photo.uri);
        console.log("read success", result);
        navigation.navigate("ReceiptDataScreen", { data: result });
      } catch (error) {
        console.error("Error scanning receipt:", error);
        navigation.navigate("Home"); // Go back to the CameraScreen if there's an error
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {isFocused && (
        <Camera
          style={{ flex: 1 }}
          ref={(ref) => setCameraRef(ref)}
          type={Camera.Constants.Type.back}
          autoFocus={Camera.Constants.AutoFocus.on}
        />
      )}
      {!isProcessing && (
        <TouchableOpacity
          style={{
            flex: 0.1,
            alignSelf: "center",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
          onPress={takePictureAndScan}
        >
          <Text style={{ fontSize: 18, marginBottom: 10, color: "black" }}>Capture</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CameraScreen;
