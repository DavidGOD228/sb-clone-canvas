import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Paper from "../components/Paper";
import TextLink from "../components/TextLink";
import Checkbox from "../components/input/Checkbox";
import Input from "../components/input/Input";
import { useState } from "react";

export default function Signin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [keepSigned, setKeepSigned] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async () => {};

  return (
    <main>
      <div className="mx-auto justify-center w-1/2">
        <div className="mx-auto py-4 md:py-7">
          <h1 className="text-[28px] font-bold text-center mb-2">
            Sign in or create an account
          </h1>
        </div>
        <div className="mx-auto justify-center mb-7 max-w-[500px]">
          <Paper>
            <div className="w-full">
              <p>
                <span className="text-green-800">*</span> indicates required
                field
              </p>
              <div className="mt-3 mb-2">
                <Input
                  value={username}
                  placeholder="Username or email address"
                  required={true}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Input
                  value={password}
                  placeholder="Password"
                  type="password"
                  required={true}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {showError && <p className="text-red-500 my-2">{error}</p>}
              <div className="mb-3">
                <Checkbox
                  checked={keepSigned}
                  onChange={() => setKeepSigned(!keepSigned)}
                  label="Keep me signed in."
                  link="/details"
                  linkText="Details"
                />
              </div>
              <div className="mt-3">
                <TextLink text="Forgot your username?" />
              </div>
              <div>
                <TextLink text="Forgot your password?" />
              </div>
              <div className="flex justify-end mt-4 mb-2">
                <Button
                  label="Sign in"
                  large
                  bgColor="green-700"
                  disabled={!(password && username)}
                  onClick={onSubmit}
                />
              </div>
            </div>
          </Paper>
          <div className="mt-8">
            <div className="flex flex-col px-4 md:px-[56px] py-8 justify-center items-center">
              <h2
                className="
                    font-bold
                    text-green-800
                    text-sm
                    text-center
                    items-center
                    mb-2
                "
              >
                JOIN STARBUCKS® REWARDS
              </h2>
              <p className="mb-3 mx-auto text-center w-[70%]">
                Join Starbucks® Rewards to earn free food and drinks, get free
                refills, pay and order with your phone, and more.
              </p>
              <Button
                outline
                bgColor="green-700"
                label="Join now"
                onClick={() => navigate("/signup")}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
