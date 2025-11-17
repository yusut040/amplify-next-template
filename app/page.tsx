"use client";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import {Authenticator,Button} from '@aws-amplify/ui-react';

Amplify.configure(outputs);

const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});

export default function App() {
  return (
    <Authenticator>
      {({ signOut }) => (
        <>
          <Button onClick={signOut}>Sign Out</Button>
            <StorageBrowser/>
        </>
      )}
    </Authenticator>
  );
}
