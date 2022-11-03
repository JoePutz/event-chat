import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const APP_ID = "400719e9590f4146a60527f1b30e5382";
const TOKEN =
  "007eJxTYNi+7V/T8tjuP++76g9czXwzPbqzLGNB5LwFbrWa/hvP/WNXYDAxMDA3tEy1NLU0SDMxNDFLNDMwNTJPM0wyNkg1NbYwsn6VnNwQyMjAGXyClZEBAkF8FobcxMw8BgYAHVkg7Q==";

export const config = {
  mode: "rtc",
  codec: "vp8",
  appId: APP_ID,
  token: TOKEN,
};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
