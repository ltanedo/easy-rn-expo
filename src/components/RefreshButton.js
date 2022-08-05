import React, {useState, useEffect } from "react";
import { Stack, Button, useToast, Center,Box  } from "native-base";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function RefreshButton(props) {
  const toast = useToast();
  const [pressed, setPressed] = useState(false);

  const isPressed = () => {
    return pressed ? pressed : false;
  }

  const showToast = () => {
    toast.show({
      id: 'refresh',
      title: "refreshing",
      status: "success",
      description: "Give it a sec!",
      placement: 'top-right',
      duration: 1000
    })
    setPressed(true)
    wait(2000).then(() => setPressed(false));
  }

  const tryFunc = () => {
    try{
      showToast()
      props.callback();         
    }
    catch(error){
      // console.log(error)
    }
  }

  return (
    <Box mt={3} alignItems="center">
    {
        pressed == false ? 
            <Button onPress={() => tryFunc()}
                    borderRadius={16} 
                    size='lg' 
                    width='75%' 
                    bg={'amber.400:alpha.30'}
                    p='5%'> Refresh </Button>
          :
            <Button isLoading
                    borderRadius={16} 
                    size='lg' 
                    width='75%' 
                    shadow={2} 
                    bg={'amber.400:alpha.70'}
                    _spinner={{
                      color: "white"
                    }}
                    isLoadingText="Refresh"/> 
    }
    </Box>
    )
};
