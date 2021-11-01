import React, { PropsWithChildren } from "react";

function encodeMail(originalString: string, obfuscate: boolean) {
  const originalLength = originalString.length;

  let encodedString = "";

  if (!obfuscate) {
    return originalString;
  }

  for (let pos = 0; pos < originalLength; pos++) {
    encodedString += "%" + Number(originalString.charCodeAt(pos)).toString(16);
  }
  return encodedString;
}

function generateHref(email: string, obfuscate: boolean) {
  return "mailto:" + encodeMail(email, obfuscate);
}

interface MailtoProps {
  obfuscate: boolean;
  email: string;
}

export default function Mailto({
  email,
  obfuscate,
  children,
}: PropsWithChildren<MailtoProps>) {
  return <a href={`${generateHref(email, obfuscate)}`}>{children}</a>;
}
