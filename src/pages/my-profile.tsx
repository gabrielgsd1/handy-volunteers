import React, { useContext } from "react";
import LoggedLayout from "./_loggedInLayout";
import Input from "@/components/Inputs/Input";
import { useFetch } from "@/hooks/useFetch";
import { UserContext } from "@/contexts/UserContext";
import { User } from "@/interfaces/interfaces";
import moment from "moment";
import AuthLayer from "@/components/AuthLayer";
import Loading from "@/components/Loading";

function MyProfile() {
  const userCtx = useContext(UserContext);
  const { data, error, isLoading } = useFetch<User>(
    "GET",
    `/users/${userCtx?.user?.User_Id}`
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <AuthLayer>
      <></>
      {/* <LoggedLayout>
        <div className="grid grid-cols-2 gap-6 px-8">
          {data && (
            <>
              <Input readOnly value={data.Name || ""} name="Nome" id="2" />
              <Input readOnly value={data.Email || ""} name="E-mail" id="2" />
              {data.CreatedAt && (
                <Input
                  readOnly
                  value={moment(data.CreatedAt).format("DD/MM/YYYY")}
                  name="Data de criação"
                  id="2"
                />
              )}
              <Input value={data.} name="somethign" id="2" />
            <Input value={} name="somethign" id="2" />
            <Input value={} name="somethign" id="2" />
            </>
          )}
        </div>
      </LoggedLayout> */}
    </AuthLayer>
  );
}

export default MyProfile;
