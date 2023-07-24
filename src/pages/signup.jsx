import Button from "../components/Button";
import Paper from "../components/Paper";
import TextLink from "../components/TextLink";
import Checkbox from "../components/input/Checkbox";
import Input from "../components/input/Input";
import { useState } from "react";

// const TermsCheckbox = () => {
//   return (
//   <p>
//   I agree to the
//   <a className="underline hover:no-underline cursor-pointer text-green-800">
//     Starbucks® Rewards Terms
//   </a>{" "}
//   and the
//   <a className="underline hover:no-underline cursor-pointer text-green-800">
//     Starbucks Card Terms
//   </a>{" "}
//   and have read the
//   <a className="underline hover:no-underline cursor-pointer text-green-800">
//     Starbucks Privacy Statement
//   </a>
//   .
// </p>
//   );
// };

export default function Signup() {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [cardPass, setCardPass] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [terms, setTerms] = useState(false);

  const termslabel = (
    <p>
      I agree to the
      <a className="underline hover:no-underline cursor-pointer text-green-800">
        Starbucks® Rewards Terms
      </a>{" "}
      and the
      <a className="underline hover:no-underline cursor-pointer text-green-800">
        Starbucks Card Terms
      </a>{" "}
      and have read the
      <a className="underline hover:no-underline cursor-pointer text-green-800">
        Starbucks Privacy Statement
      </a>
      .
    </p>
  );

  const onSubmit = async () => {};

  return (
    <main>
      <div className="mx-auto justify-center w-1/2">
        <div className="mx-auto py-4 md:py-7">
          <h1 className="text-[28px] font-bold text-center mb-2">
            Create an account
          </h1>
        </div>
        <div className="mt-2">
          <div className="flex flex-col px-4 md:px-[56px] py-8 justify-center items-center">
            <h2
              className="
                    font-bold
                    text-black/[.58]
                    text-sm
                    text-center
                    items-center
                    mb-2
                "
            >
              STARBUCKS® REWARDS
            </h2>
            <p className="mb-3 mx-auto text-center text-black/[.58]">
              Join Starbucks Rewards to earn Stars for free food and drinks, any
              way you pay. Get access to mobile ordering, a birthday Reward, and{" "}
              <a className="underline hover:no-underline cursor-pointer">
                more
              </a>
              .
            </p>
          </div>
        </div>
        <div className="mx-auto justify-center mb-7 max-w-[500px]">
          <Paper>
            <div className="w-full px-8">
              <p>
                <span className="text-green-800">*</span> indicates required
                field
              </p>
              <div className="mt-[32px] mb-2 pb-[40px]">
                <h2 className="font-bold text-[19px]">Personal Information</h2>
                <Input
                  value={firstName}
                  placeholder="First Name"
                  required={true}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                  value={lastName}
                  placeholder="Last Name"
                  required={true}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="mb-3 pb-[40px]">
                <h2 className="font-bold text-[19px]">Account Security</h2>
                <Input
                  value={email}
                  placeholder="Email address"
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                  help="This will be your username"
                />
                <Input
                  value={password}
                  placeholder="Password"
                  type="password"
                  required={true}
                  onChange={(e) => setPassword(e.target.value)}
                  help="Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk."
                />
              </div>
              <div className="mt-3">
                <TextLink
                  text="Already have a Starbucks gift card?"
                  action
                  onClick={() => setOpen(!open)}
                />
                {open && (
                  <div>
                    <h2>
                      Add your gift card to earn Stars when you pay and order
                      ahead.
                    </h2>
                    <Input
                      value={cardNum}
                      placeholder="Card number (16 digits)"
                      required={true}
                      onChange={(e) => setCardNum(e.target.value)}
                      help="No spaces or dashes"
                    />
                    <Input
                      value={cardPass}
                      placeholder="Security code"
                      required={true}
                      onChange={(e) => setCardPass(e.target.value)}
                      help="Scratch to reveal 8-digit code"
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col py-8">
                <h2
                  className="
                    font-bold
                    text-black/[.58]
                    text-sm
                    items-center
                    mb-2
                "
                >
                  COLLECT MORE STARS & EARN REWARDS
                </h2>
                <p className="mb-3">
                  Email is a great way to know about offers and what’s new from
                  Starbucks.
                </p>
                <Checkbox
                  checked={subscribe}
                  onChange={() => setSubscribe(!subscribe)}
                  label="Yes, I’d like email from Starbucks"
                  help="Know about initiatives, announcements and product offers."
                />
              </div>
              <div className="flex flex-col py-8">
                <h2
                  className="
                    font-bold
                    text-black/[.58]
                    text-sm
                    items-center
                    mb-2
                "
                >
                  TERMS OF USE
                </h2>

                <Checkbox
                  checked={terms}
                  onChange={() => setTerms(!terms)}
                  label=" I agree to the Starbucks® Rewards Terms and the Starbucks Card Terms and have read the Starbucks Privacy Statement."
                />
              </div>

              <div className="mb-3"></div>
              <div className="flex justify-end mt-4 mb-2">
                <Button
                  label="Sign in"
                  large
                  bgColor="emerald-700"
                  onClick={onSubmit}
                />
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </main>
  );
}
