export const withWatermark = (url: string): string => {
    return url.replace("/upload/", "/upload/l_marcaagua,o_40,g_south_east,x_10,y_10/");
  };
  
  
  export const withWatermarkRetina = (url: string): string =>
    url.replace(
      "/upload/",
      "/upload/l_marcaagua,o_40,g_south_east,x_10,y_10,f_auto,q_auto,dpr_2.0/"
    );
  