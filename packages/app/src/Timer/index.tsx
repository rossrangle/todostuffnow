import React, { useState, useEffect } from "react";

import "./Timer.css";
import { Box, Text, FormControl, Label, Input, Heading } from "ds";

function Timer() {
  const [touched, setTouched] = useState<boolean>(false);
  const [minutesRemaining, setMinutesRemaining] = useState<number>(0);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(0);

  useEffect(() => {
    function decreaseTime() {
      if (secondsRemaining === 0 && minutesRemaining === 0) {
      } else if (secondsRemaining === 0) {
        setMinutesRemaining(minutesRemaining - 1);
        setSecondsRemaining(59);
      } else {
        setSecondsRemaining(secondsRemaining - 1);
      }
    }
    const timeout = setTimeout(decreaseTime, 1000);
    return () => clearTimeout(timeout);
  }, [secondsRemaining, minutesRemaining]);

  return (
    <Box mb={3} p={3} className="Timer">
      <FormControl.Field>
        <Label htmlFor="time-remaining">
          Set a target time to complete your list by (in minutes)
        </Label>
        <Input
          value={minutesRemaining}
          id="time-remaining"
          type="number"
          onChange={(e: any) => {
            setMinutesRemaining(e.target.value);
            setSecondsRemaining(0);
            setTouched(true);
          }}
          style={{ flexGrow: 1 }}
        />
      </FormControl.Field>
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
