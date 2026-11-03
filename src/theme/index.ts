/** DentaCare Premium Studio · semantic design tokens, dp instead of CSS px. */
export const C = {
 navy:'#132B49', ink:'#0B2542', blue:'#075A92', teal:'#0897AF', aqua:'#24D4DF', cyan:'#8AF5FF',
 mint:'#D5FBF8', sky:'#7FCBFF', powder:'#EAF6FF', canvas:'#F5FAFE', white:'#FFFFFF',
 muted:'#7B91A6', secondary:'#4D6880', border:'#DBEDF5', borderDark:'#B9E2EF',
 success:'#168875', successBg:'#E5F8F1', warning:'#B47B27', warningBg:'#FFF3DE',
 danger:'#C44862', dangerBg:'#FFF0F2', lavender:'#806BE6', peach:'#F2A16E',
 } as const;
export const G = {
 action:['#40E3EA','#14C7D7','#0786A5'] as const,
 ocean:['#F6FCFF','#E1F5FF','#B9E8FF'] as const,
 hero:['#86ECEC','#32CADB','#08799C'] as const,
 background:['#F8FDFF','#EAF7FF','#E8F7FE'] as const,
 glass:['rgba(255,255,255,.97)','rgba(244,252,255,.82)'] as const,
 lavender:['#F4EFFF','#E1DDFF'] as const,
} as const;
export const space = {xs:4,sm:8,md:12,lg:16,xl:20,xxl:24,section:32};
export const radius = {chip:14,input:19,card:25,hero:32,pill:99};
export const typography = {
 display:{fontSize:35,lineHeight:42,fontWeight:'800' as const,letterSpacing:-1.4},
 title:{fontSize:27,lineHeight:34,fontWeight:'800' as const,letterSpacing:-.85},
 heading:{fontSize:21,lineHeight:28,fontWeight:'800' as const,letterSpacing:-.5},
 subheading:{fontSize:16,lineHeight:23,fontWeight:'700' as const,letterSpacing:-.25},
 body:{fontSize:14,lineHeight:21,fontWeight:'400' as const},
 caption:{fontSize:12,lineHeight:18,fontWeight:'500' as const},
 mini:{fontSize:11,lineHeight:16,fontWeight:'600' as const},
} as const;
export const shadow = {
 card:{shadowColor:'#2E769E',shadowOpacity:.11,shadowOffset:{width:0,height:10},shadowRadius:24,elevation:4},
 float:{shadowColor:'#0A92AD',shadowOpacity:.23,shadowOffset:{width:0,height:15},shadowRadius:24,elevation:9},
 luxe:{shadowColor:'#079BB4',shadowOpacity:.18,shadowOffset:{width:0,height:16},shadowRadius:32,elevation:6}
} as const;
