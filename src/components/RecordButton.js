import React, {useState, useEffect } from "react";
import { Button, useToast, Center,Box  } from "native-base";


export default function RecordButton() {
  const toast = useToast();
  const [pressed, setPressed] = useState(false);

  const isPressed = () => {
    return pressed ? pressed : false;
  }

  const showToast = () => {
    if (pressed) {
      if (!toast.isActive('Finished')) {
        toast.show({
          id: 'Finished',
          title: "Recording Finished",
          status: "success",
          description: "Recording Saved!",
          placement: 'top'
        })
        setPressed(false)
      }
    }
    else {
      if (!toast.isActive('Started')) {
        toast.show({
          id: 'Started',
          title: "Recording Started",
          status: "error",
          description: "Press again to end recording",
          placement: 'top'

        })
        setPressed(true)
      }
    }
  }

  return (
      <Box borderRadius={16} alignItems="center">
      <Button borderRadius={16} size='lg' width='75%' p='3%' colorScheme={pressed ? 'secondary' : 'primary'  }
        onPress={() => {
          showToast()
        }}>
        { pressed ? 'Stop Recording' : 'Record'  }
      </Button>
      </Box>
    )
};
