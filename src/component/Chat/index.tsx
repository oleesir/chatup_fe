import { FC } from "react";
import {signOut} from "next-auth/react";
import { Button } from "@chakra-ui/react";

interface IChatProps{

}
const Chat:FC<IChatProps> =()=>{
    return(
        <>
        <h1>Chat</h1>   <Button onClick={() => signOut()}>Logout</Button>
    </>
    )
}

export default Chat;