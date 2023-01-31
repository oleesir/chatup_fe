import React, {FC, useState} from "react";
import { signIn } from "next-auth/react";
import {Center, Input, Stack, Text, Button, Image} from "@chakra-ui/react";
import { Session } from "next-auth";

interface IAuthProps{
session: Session | null;
}
const Index:FC<IAuthProps> =({session})=>{
    const [username, setUsername] = useState("");

    const onSubmit = ()=>{
        console.log('Submit');
    }
    return (
        <Center height="100vh">
            <Stack align="center" spacing={9}>
                {
                    session ? (
                        <>
                        <Text fontSize="3xl">Create username</Text>
                            <Input placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)}/>
                            <Button onClick={onSubmit}>Save</Button>
                        </>
                    ) : (
                        <>
                            <Text fontSize="3xl">Olive messenger</Text>
                            <Button onClick={()=> signIn("google")}  leftIcon={<Image height="20px" src="/images/googleLogo.png"/>}>Login with Google</Button>
                        </>
                    )
                }

            </Stack>

        </Center>
    )
}

export default Index;