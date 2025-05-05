import React, { FC, useEffect, useMemo, useState } from "react";

type AuthCountdownTimerProp = {
  time: number;
  onResend?: () => void;
};

const AuthCountdownTimer: FC<AuthCountdownTimerProp> = ({
  time,
  onResend,
}): JSX.Element => {
  const [timeLeft, setTimeLeft] = useState<number>(time);
  const [canResend, setCanResend] = useState<boolean>(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setCanResend(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleResend = (): void => {
    setCanResend(false);
    if (onResend) onResend();
  };

  const formattedTime = useMemo(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(time)

    if (time > 0) {
      setCanResend(false)
    }
  }, [time])

  return (
    <div className="new-auth-countdown">
      {canResend ? (
        <button
          onClick={handleResend}
          className="new-auth-countdown__resend-button"
        >
          ارسال مجدد کد
        </button>
      ) : (
        <div className="new-auth-countdown__remaining-time">
          <span className="new-auth-countdown__label">زمان باقی مانده:</span>
          <span className="new-auth-countdown__value">{formattedTime}</span>
        </div>
      )}
    </div>
  );
};

export default AuthCountdownTimer;
