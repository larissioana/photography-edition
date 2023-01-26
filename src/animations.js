
export const titleAnim={
    hidden:{
       opacity:0,
   
    },
    show:{
        opacity:1,
        transition:{
            duration:0.75, ease:"easeOut",delay:0.75,
        }
    }
};
export const photoAnim={
    hidden:{
       opacity:0,
       scale:1.1,
     
    },
    show:{
        opacity:1,
        scale:1,
        transition:{
        duration:0.35, ease:"easeOut",
        }
    }
};
export const fade={
    hidden:{
        opacity:0,
    },
    show:{
        opacity:1,
        transition:
        {
            duration:0.5, ease:'easeIn', delay:1.75
        }
    }
}
export const photoAnimation={
    hidden:{
        opacity:0,
        y:200
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:0.5, ease:'easeIn'
        }
    }
}
export const container={
    hidden:{opacity:1},
    show:{opacity:1,transition:{staggerChildren:.2,ease:"easeOut", duration:.75}},
};

export const pageAnimation={
    hidden:{
        opacity:0,
       
       
    },
    show:{
        opacity:1,
        transition:{
            duration:0.5,
            when:"beforeChildren",
            staggerChildren:0.5,
        
        },
    },
        exit:{
             opacity:0,
             transition:{
             duration:0.5,
          
                
                },
            },
        };