import React, { useState, useEffect } from "react";

import "./Timer.css";
import { Box, Text, FormControl, Label, Input, Heading, Button } from "ds";

function requestPermission() {
  Notification.requestPermission(function(status) {
    console.log("Notification permission status:", status);
  });
}

function Timer() {
  const [touched, setTouched] = useState<boolean>(false);
  const [minutesRemaining, setMinutesRemaining] = useState<number>(0);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(0);

  useEffect(() => {
    function decreaseTime() {
      const hasEnded = secondsRemaining <= 0 && minutesRemaining <= 0;
      if (hasEnded) {
        if (Notification.permission === "granted") {
          navigator.serviceWorker.getRegistration().then(function(reg) {
            console.log({ reg });
            reg &&
              reg.showNotification("Hello world!", {
                body: "This is the body of the notification",
                tag: "This is a tag",
              });
          });
        } else {
          console.log(" No notification ");
        }
      } else if (secondsRemaining === 0) {
        setMinutesRemaining(minutesRemaining - 1);
        setSecondsRemaining(10);
      } else {
        setSecondsRemaining(secondsRemaining - 1);
      }
    }
    if (touched) {
      const timeout = setTimeout(decreaseTime, 1000);
      return () => clearTimeout(timeout);
    }
  }, [touched, secondsRemaining, minutesRemaining]);

  return (
    <Box mb={3} p={3} className="Timer">
      <FormControl.Field>
        <Label htmlFor="time-remaining">
          Set a target time to complete your list by (in minutes)
        </Label>
        <Input
          value={minutesRemaining}
          id="time-remaining"
          min={0}
          type="number"
          onChange={(e: any) => {
            setMinutesRemaining(e.target.value);
            setSecondsRemaining(0);
            setTouched(true);
          }}
          style={{ flexGrow: 1 }}
        />
      </FormControl.Field>
      <Button
        onClick={requestPermission}
        hidden={!touched || Notification.permission === "granted"}
        width="100%"
      >
        Get notified when time is up!
      </Button>
      <Text variant="body" hidden={!touched}>
        Time remaining
      </Text>
      <Heading variant="heading-2" hidden={!touched}>
        {minutesRemaining}m:
        {secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining}s
      </Heading>
    </Box>
  );
}

export default Timer;
