import React, { useRef, useState } from "react";
import {
  Animated,
  View,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import styles from "./carousel.style";
import useInterval from "../../app/useInterval";

function Carousel({ images }) {
  const animation = useRef(new Animated.Value(0));
  const [currentImage, setCurrentImage] = useState(0);
  useInterval(() => handleAnimation(), 3500);
  const handleAnimation = () => {
    let newCurrentImage = currentImage + 1;

    if (newCurrentImage >= images.length) {
      newCurrentImage = 0;
    }
    Animated.spring(animation.current, {
      toValue: -(Dimensions.get("screen").width * newCurrentImage),
      useNativeDriver: true,
    }).start();
    setCurrentImage(newCurrentImage);
  };
  return (
    <React.Fragment>
      <View>
        <Animated.View
          style={[
            styles.container,
            {
              transform: [{ translateX: animation.current }],
            },
          ]}
        >
          {images.map((img) => (
            <Image source={{ uri: img }} style={styles.image} key={img} />
          ))}
        </Animated.View>
        {/* <View style={styles.indicatorContainer}>
          {images.map((image, index)=>(
            <TouchableOpacity key={`${image}_${index}`} 
            style={[styles.indicator, index===currentImage ? styles.activeIndicator : undefined]}
            onPress={()=>
            {
              let newCurrentImage = index;
              Animated.spring(animation.current,{
                toValue: -(Dimensions.get('screen').width*newCurrentImage),
                useNativeDriver: true,
              }).start();
              setCurrentImage(newCurrentImage)
            }
            }
            ></TouchableOpacity>
          ))}
        </View> */}
      </View>
    </React.Fragment>
  );
}

export default Carousel;
