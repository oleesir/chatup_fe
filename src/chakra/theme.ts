import {extendTheme, type ThemeConfig} from '@chakra-ui/react';


const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

// 3. extend the theme
export const theme = extendTheme(
    { config },
    {
        colors:{
            brand:{
                100:"#3d84f7"
            },
        },
        styles:{
            global:()=>({
                body:{
                    bg:"whiteAlpha.200",
                }
            })
        }
    });
