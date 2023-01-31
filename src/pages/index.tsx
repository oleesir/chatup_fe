import {NextPage, NextPageContext} from 'next';
import {useSession, signIn, signOut, getSession, GetSessionParams} from "next-auth/react"
import {session} from "next-auth/core/routes";
import { Box } from "@chakra-ui/react";
import Index from '../component/Auth/index';
import Chat from "@/component/Chat/index";
import { Session } from "next-auth";

const Home: NextPage = () => {
  const {data: session} = useSession();
  return (
      <Box>
          {
              session?.user?.username ?
                  (<Chat/>) :
                  (<Index session={session}/>)
          }
      </Box>
  )
}

export async function getServerSideProps(context: NextPageContext){
  const session = await getSession(context);
  return{
    props:{
      session,
    }
  }
}
export default Home;