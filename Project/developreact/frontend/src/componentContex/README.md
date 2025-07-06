

Question

1) what do you mean by context and why we use and where? 
2) steps : for useContex




==========================================================================================================================================

1) what do you mean by context and why we use and where? 
Ans :- context help to reduce time complexity , make code understandale, 
        (why) -> because there is no propdrilling use (e.g-- don't need to seen prop in every component  )

        ================================================================

2) steps : for useContex

a) create Context  
b) Context Provider
c) Consumer

 ------------- syntax  -----------------

import { createContext } from "react"


export const Appcontext = createContext();
export default function AppContextProvider({children})
{
    

    return(
        <Appcontext.Provider >
            {children}
        </Appcontext.Provider>
    )
}

------------   in index.js -------- 

root.render(
    <AppContextProvider>
      <App />
    </AppContextProvider>
);

----------------
with help of usecontex(variable) we can use anywhere 
 
const [theme,addTheme] = useContext(AppContex);
        ====================================================================












///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                     ERROR
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

1) Forgot about why we use arrow function and norwal function call
                             ++++++++++++++++++++++++++++++
2) Confusion of adding style through object

        const [theme,addTheme] = useContext(AppContex); // already in theme dark is initilize

        const style = {
        dark: {
            background:"green",
            border:"1px solid red"
        },
        light:{
            background:"skyblue",
            border:"1px solid black"


        }
        } 
        -------------------------------
           <div style={style[theme]}>
                    Inside Box
                </div>

                 ++++++++++++++++++++++++++++++++++++++++++++++++++