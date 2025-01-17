
import HeaderScreen from "@/components/screens/HeaderScreen";
import { useEffect, useState } from "react";
import { useUser } from "@/hooks/api/user/useUser";
import { UserI } from "@/hooks/api/user/user.interface";
import Loading from "@/components/ui/Loading";
import React from "react";
import { Card } from "@/components/ui/Card";
import { CustomSwitch } from "@/components/ui/customSwitch";
import { AlertFunction } from "@/functions/alert";
import dataBase from "@/hooks/api/baseDB";


export default function HomeScreen() {
  const [users, setUsers] = useState<UserI[]>([]);
  const { users: fetchedUsers, isLoading } = useUser.find();

  useEffect(() => {
    if (fetchedUsers) setUsers(fetchedUsers);
  }, [fetchedUsers]);

  const handleStatusChange = async (userId: string, newStatus: boolean) => {
    try {
      await dataBase.patch(`/api/users/${userId}`);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, status: newStatus } : user
        )
      );
    } catch (error) {
      AlertFunction({ title: 'Error', msg: 'Ha ocurrido un error al modificarle el estado el usuario' })
    }
  };


  return (
    <>
      <HeaderScreen title='Gestionar Usuario' />
      {
        isLoading
          ? <Loading />
          : <>
            {users.map((user) => (
              <Card key={user.id}>
                <CustomSwitch
                  text={`@${user.username}`}
                  isOn={user.status}
                  onChange={(newStatus) => handleStatusChange(user.id, newStatus)}
                />
              </Card>
            ))}
          </>
      }
    </>
  );
}