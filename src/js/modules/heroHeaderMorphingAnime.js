import anime from 'animejs';

const shapes = [
  "M 0,0 V 844 H 390 V 0 Z M 90.040172,30.787366 C 138.46472,15.906723 265.45144,18.533903 286.24241,25.161261 c 90.55539,28.865557 78.64056,77.135089 78.88454,232.073359 0.18309,116.27068 -6.3088,221.59168 -4.09474,331.40625 3.56096,176.61837 2.14919,224.73795 -158.05319,237.2091 C 80.438246,835.38931 16.260567,795.52085 14.383903,647.11523 11.693866,434.38856 24.158841,321.78143 17.085681,227.7644 7.8555036,105.07611 41.615621,45.668009 90.040172,30.787366 Z",
  "M 0,0 V 844 H 390 V 0 Z M 64.106549,55.100138 C 119.01451,-0.30179107 213.25654,6.1637888 286.24241,25.161261 c 89.74077,23.358598 106.26653,48.874329 70.78028,274.215499 -25.05016,159.071 -21.27615,133.72556 0.76782,320.06029 15.33586,129.63197 38.04417,210.91377 -156.43234,191.82526 C 23.472773,793.80228 37.895282,704.59474 40.317526,632.52757 45.56408,476.43082 44.558065,400.17708 25.189938,239.11036 17.762254,177.34121 9.1985926,110.50207 64.106549,55.100138 Z",
  "M 0,0 V 844 H 390 V 0 Z M 70.983239,75.730209 C 125.8912,20.32828 213.25654,6.1637888 286.24241,25.161261 c 89.74077,23.358598 94.80538,85.550009 73.07251,239.832049 -22.46185,159.45707 6.23061,165.81678 -1.52441,354.44374 -5.3622,130.42578 5.95295,224.66715 -188.52356,205.57864 C -8.6184482,807.55566 19.557441,679.38021 21.979685,607.31304 27.226239,451.21629 46.850295,434.56053 27.482168,273.49381 20.054484,211.72466 16.075283,131.13214 70.983239,75.730209 Z",
  "M 0,0 V 844 H 390 V 0 Z M 59.522089,57.392368 C 114.43005,1.9904393 213.25654,6.1637888 286.24241,25.161261 c 89.74077,23.358598 88.6549,84.027519 89.11812,239.832049 0.46045,154.87261 3.93838,170.40124 -3.81664,359.0282 -5.3622,130.42578 15.12187,204.03708 -179.35464,205.57864 C 13.454642,831.01693 19.557441,773.36164 17.395225,627.94311 15.073181,471.77548 26.220224,420.80715 27.482168,273.49381 28.015099,211.28196 4.6141326,112.7943 59.522089,57.392368 Z",
];

export default anime({
  targets: '#shape-mask > svg > path',
  d: [
    { value: [ shapes[0], shapes[1] ] },
    { value: shapes[2] },
    { value: shapes[3] },
    { value: shapes[0] },
  ],
  autoplay: false,
  duration: 15000,
  easing: 'easeInOutSine',
  loop: true,
});