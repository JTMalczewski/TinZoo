import { useEffect } from "react";

export function Images() {
  let images = [];

  useEffect(() => {
    fetch('http://localhost:3000/pieski/all', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        images.push(data[i].Zdjecie);
      }
    })
  }, []);

  return (images)
}

// export const images = [
//     'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmyrescuedogrescuedme.files.wordpress.com%2F2011%2F09%2Fboo-the-worlds-cutest-dog-profile-picture-on-facebook.jpg&f=1&nofb=1&ipt=38a5fbdab491b8cbdf4feea0ed573ca214dbf1e3585334145bf010631beb16d0&ipo=images',
//     'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmyrescuedogrescuedme.files.wordpress.com%2F2011%2F09%2Fboo-the-worlds-cutest-dog-profile-picture-on-facebook.jpg&f=1&nofb=1&ipt=38a5fbdab491b8cbdf4feea0ed573ca214dbf1e3585334145bf010631beb16d0&ipo=images',
//     'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmyrescuedogrescuedme.files.wordpress.com%2F2011%2F09%2Fboo-the-worlds-cutest-dog-profile-picture-on-facebook.jpg&f=1&nofb=1&ipt=38a5fbdab491b8cbdf4feea0ed573ca214dbf1e3585334145bf010631beb16d0&ipo=images'
//   ];
  