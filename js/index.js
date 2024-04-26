const dialogueBox=document.getElementById('dialogue-box');
const dateDialogue= document.getElementById('dialog');
const middleSection=document.getElementsByClassName('middle')[0];
const dateInput=document.getElementById('datetime-local');

const indexPageData=[
  `
  <svg  style="width: 250px; height: 250px;" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M227 173.61H0V173.723H227V173.61Z" fill="#EBEBEB"/>
  <path d="M204.255 177.932H162.986V178.045H204.255V177.932Z" fill="#EBEBEB"/>
  <path d="M150.374 176.701H139.074V176.815H150.374V176.701Z" fill="#EBEBEB"/>
  <path d="M176.202 182.149H158.682V182.263H176.202V182.149Z" fill="#EBEBEB"/>
  <path d="M34.0955 181.386H23.8169V181.5H34.0955V181.386Z" fill="#EBEBEB"/>
  <path d="M50.344 181.386H38.136V181.5H50.344V181.386Z" fill="#EBEBEB"/>
  <path d="M102.218 179.471H80.9526V179.584H102.218V179.471Z" fill="#EBEBEB"/>
  <path d="M107.598 153.361H19.9352C19.2485 153.36 18.5903 153.086 18.1051 152.6C17.6199 152.114 17.3474 151.456 17.3474 150.769V27.5396C17.3534 26.8568 17.6285 26.2039 18.1131 25.7228C18.5976 25.2417 19.2524 24.9711 19.9352 24.97H107.598C108.286 24.97 108.945 25.2431 109.431 25.7292C109.917 26.2154 110.19 26.8748 110.19 27.5623V150.769C110.19 151.456 109.917 152.116 109.431 152.602C108.945 153.088 108.286 153.361 107.598 153.361ZM19.9352 25.0608C19.2786 25.062 18.6492 25.3237 18.1853 25.7884C17.7215 26.2532 17.4609 26.883 17.4609 27.5396V150.769C17.4609 151.425 17.7215 152.055 18.1853 152.52C18.6492 152.985 19.2786 153.246 19.9352 153.248H107.598C108.255 153.246 108.885 152.985 109.35 152.52C109.814 152.056 110.076 151.426 110.077 150.769V27.5396C110.076 26.8826 109.814 26.2527 109.35 25.7881C108.885 25.3235 108.255 25.062 107.598 25.0608H19.9352Z" fill="#EBEBEB"/>
  <path d="M205.803 153.361H118.135C117.448 153.36 116.789 153.086 116.304 152.601C115.818 152.115 115.544 151.456 115.543 150.769V27.5396C115.55 26.8564 115.826 26.2035 116.312 25.7225C116.797 25.2415 117.452 24.9711 118.135 24.97H205.803C206.485 24.9723 207.138 25.2434 207.622 25.7244C208.105 26.2054 208.38 26.8576 208.386 27.5396V150.769C208.386 151.455 208.114 152.113 207.63 152.599C207.146 153.085 206.489 153.359 205.803 153.361ZM118.135 25.0608C117.478 25.062 116.848 25.3235 116.384 25.7881C115.919 26.2527 115.658 26.8826 115.656 27.5396V150.769C115.658 151.426 115.919 152.056 116.384 152.52C116.848 152.985 117.478 153.246 118.135 153.248H205.803C206.46 153.246 207.09 152.985 207.554 152.52C208.019 152.056 208.28 151.426 208.282 150.769V27.5396C208.28 26.8826 208.019 26.2527 207.554 25.7881C207.09 25.3235 206.46 25.062 205.803 25.0608H118.135Z" fill="#EBEBEB"/>
  <path d="M23.8123 173.605H78.0925L78.0925 53.5629H23.8123L23.8123 173.605Z" fill="#F0F0F0"/>
  <path d="M23.8169 173.605H75.5229L75.5229 53.5629H23.8169L23.8169 173.605Z" fill="#F5F5F5"/>
  <path d="M72.7988 170.886V56.2915H26.5408L26.5408 170.886H72.7988Z" fill="#F0F0F0"/>
  <path d="M41.4865 110.322H32.0569C31.7358 110.321 31.4282 110.193 31.2011 109.966C30.974 109.739 30.8459 109.431 30.8447 109.11C30.8459 108.789 30.974 108.481 31.2011 108.254C31.4282 108.027 31.7358 107.899 32.0569 107.898H41.4865C41.8076 107.899 42.1152 108.027 42.3423 108.254C42.5694 108.481 42.6975 108.789 42.6987 109.11C42.6975 109.431 42.5694 109.739 42.3423 109.966C42.1152 110.193 41.8076 110.321 41.4865 110.322Z" fill="white"/>
  <path d="M27.249 170.886L27.249 56.2915H26.5408L26.5408 170.886H27.249Z" fill="#F0F0F0"/>
  <path d="M103.526 171.331H111.607V136.282H103.526V171.331Z" fill="#F0F0F0"/>
  <path d="M70.2021 173.555H110.054V171.335H70.2021V173.555Z" fill="#F0F0F0"/>
  <path d="M103.526 136.286H68.6494V171.335H103.526V136.286Z" fill="#F5F5F5"/>
  <path d="M100.343 140.599H71.8228V152.094H100.343V140.599Z" fill="#F0F0F0"/>
  <path d="M100.343 155.522H71.8228V167.018H100.343V155.522Z" fill="#F0F0F0"/>
  <path d="M82.8823 141.566H89.2883C89.4962 141.565 89.6953 141.482 89.8423 141.335C89.9894 141.188 90.0725 140.989 90.0737 140.781C90.0737 140.572 89.9911 140.372 89.8439 140.224C89.6968 140.076 89.497 139.992 89.2883 139.991H82.8823C82.6736 139.992 82.4739 140.076 82.3267 140.224C82.1795 140.372 82.0969 140.572 82.0969 140.781C82.0981 140.989 82.1812 141.188 82.3283 141.335C82.4753 141.482 82.6744 141.565 82.8823 141.566Z" fill="#F5F5F5"/>
  <path d="M82.8823 156.494H89.2883C89.4939 156.493 89.691 156.411 89.8376 156.267C89.9843 156.123 90.069 155.927 90.0737 155.722C90.0725 155.514 89.9894 155.315 89.8423 155.168C89.6953 155.021 89.4962 154.938 89.2883 154.937H82.8823C82.6744 154.938 82.4753 155.021 82.3283 155.168C82.1812 155.315 82.0981 155.514 82.0969 155.722C82.1016 155.927 82.1863 156.123 82.333 156.267C82.4797 156.411 82.6767 156.493 82.8823 156.494Z" fill="#F5F5F5"/>
  <path d="M88.7433 135.596C88.5848 135.595 88.433 135.532 88.3209 135.419C88.2088 135.307 88.1452 135.156 88.144 134.997V116.787C88.144 116.628 88.2072 116.476 88.3196 116.363C88.432 116.251 88.5844 116.188 88.7433 116.188C88.9019 116.189 89.0536 116.252 89.1658 116.365C89.2779 116.477 89.3414 116.628 89.3426 116.787V134.997C89.3414 135.156 89.2779 135.307 89.1658 135.419C89.0536 135.532 88.9019 135.595 88.7433 135.596Z" fill="#F5F5F5"/>
  <path d="M94.3503 134.888H83.1365V136.3H94.3503V134.888Z" fill="#F0F0F0"/>
  <path d="M91.8487 124.7C91.77 124.7 91.6945 124.669 91.6384 124.614C91.5824 124.559 91.5503 124.484 91.5491 124.405V115.316C91.5502 115.237 91.5822 115.161 91.6381 115.105C91.6941 115.049 91.7696 115.018 91.8487 115.016C91.9278 115.018 92.0034 115.049 92.0593 115.105C92.1152 115.161 92.1472 115.237 92.1484 115.316V124.396C92.149 124.436 92.1416 124.475 92.1269 124.512C92.1121 124.549 92.0901 124.583 92.0622 124.611C92.0343 124.639 92.0011 124.662 91.9644 124.677C91.9278 124.692 91.8884 124.7 91.8487 124.7Z" fill="#F0F0F0"/>
  <path d="M80.022 118.449C80.022 118.449 80.2444 109.868 88.7433 109.868C97.2422 109.868 97.4601 118.439 97.4601 118.439L80.022 118.449Z" fill="#F0F0F0"/>
  <path d="M153.593 130.57C153.833 130.57 154.079 130.57 154.324 130.593C156.835 130.774 159.196 131.857 160.972 133.642C162.748 135.426 163.82 137.792 163.989 140.304C164.061 141.445 163.948 142.591 163.653 143.695C162.515 148.127 161.966 152.69 162.019 157.266V170.586C162.02 170.817 161.974 171.045 161.886 171.258C161.798 171.471 161.669 171.665 161.505 171.828C161.342 171.991 161.148 172.12 160.935 172.207C160.721 172.295 160.493 172.34 160.262 172.338H117.981V130.57H153.593Z" fill="#F0F0F0"/>
  <path d="M107.562 140.99C107.566 139.509 107.887 138.046 108.501 136.698C109.116 135.351 110.011 134.15 111.127 133.176C112.242 132.202 113.553 131.477 114.971 131.05C116.389 130.622 117.882 130.502 119.35 130.697C120.818 130.893 122.228 131.399 123.485 132.182C124.742 132.965 125.817 134.008 126.639 135.24C127.461 136.472 128.011 137.865 128.252 139.326C128.493 140.787 128.42 142.283 128.037 143.714C126.903 148.146 126.355 152.709 126.407 157.284V170.604C126.407 170.834 126.362 171.062 126.274 171.274C126.186 171.486 126.057 171.679 125.894 171.842C125.731 172.004 125.538 172.133 125.325 172.22C125.113 172.308 124.885 172.353 124.655 172.352H111.303C111.073 172.352 110.846 172.307 110.634 172.219C110.422 172.131 110.229 172.002 110.067 171.84C109.904 171.678 109.776 171.485 109.688 171.273C109.6 171.061 109.555 170.834 109.555 170.604V156.485C109.593 152.194 109.05 147.918 107.939 143.773C107.688 142.866 107.561 141.93 107.562 140.99Z" fill="#F5F5F5"/>
  <path d="M132.336 172.338H170.295V146.978H132.336V172.338Z" fill="#F0F0F0"/>
  <path d="M201.667 152.717H150.86V113.822C150.86 111.732 151.69 109.727 153.168 108.249C154.646 106.771 156.651 105.941 158.741 105.941H193.785C195.876 105.941 197.88 106.771 199.358 108.249C200.836 109.727 201.667 111.732 201.667 113.822V152.717Z" fill="#E0E0E0"/>
  <path d="M191.738 152.717H140.931V113.441C140.931 111.451 141.721 109.542 143.129 108.134C144.536 106.727 146.445 105.936 148.435 105.936H184.215C186.205 105.936 188.114 106.727 189.522 108.134C190.929 109.542 191.72 111.451 191.72 113.441V152.717H191.738Z" fill="#F5F5F5"/>
  <path d="M167.817 154.991H132.827C132.225 154.991 131.647 154.752 131.222 154.326C130.796 153.9 130.557 153.323 130.557 152.721V146.969C130.557 146.367 130.796 145.789 131.222 145.364C131.647 144.938 132.225 144.699 132.827 144.699H167.817C167.998 144.699 168.173 144.771 168.301 144.9C168.43 145.028 168.502 145.202 168.502 145.384V154.31C168.501 154.491 168.428 154.664 168.3 154.792C168.171 154.919 167.998 154.991 167.817 154.991Z" fill="#E0E0E0"/>
  <path d="M205.412 130.57C205.653 130.57 205.893 130.57 206.143 130.593C208.653 130.776 211.013 131.859 212.789 133.643C214.564 135.427 215.635 137.793 215.804 140.304C215.88 141.445 215.767 142.591 215.468 143.695C214.33 148.129 213.78 152.693 213.834 157.27V170.59C213.834 170.82 213.789 171.048 213.7 171.26C213.612 171.473 213.483 171.666 213.32 171.828C213.158 171.99 212.964 172.119 212.752 172.207C212.539 172.294 212.311 172.339 212.081 172.338H169.796V130.57H205.412Z" fill="#F0F0F0"/>
  <path d="M159.381 140.99C159.363 138.274 160.406 135.659 162.288 133.702C164.169 131.744 166.741 130.599 169.455 130.51C172.169 130.421 174.81 131.396 176.816 133.226C178.822 135.057 180.033 137.598 180.193 140.309C180.264 141.45 180.151 142.595 179.857 143.7C178.719 148.132 178.169 152.695 178.222 157.27V170.59C178.222 171.054 178.038 171.499 177.71 171.826C177.383 172.154 176.938 172.338 176.474 172.338H163.118C162.888 172.338 162.661 172.293 162.449 172.205C162.237 172.117 162.044 171.989 161.882 171.826C161.719 171.664 161.591 171.471 161.503 171.259C161.415 171.047 161.37 170.82 161.37 170.59V156.485C161.408 152.194 160.866 147.918 159.758 143.773C159.508 142.866 159.381 141.93 159.381 140.99Z" fill="#F5F5F5"/>
  <path d="M118.721 173.61H204.668C204.834 173.61 205 173.577 205.154 173.513C205.308 173.449 205.447 173.355 205.565 173.237C205.683 173.119 205.776 172.979 205.839 172.824C205.903 172.67 205.935 172.505 205.934 172.338H117.454C117.454 172.505 117.486 172.67 117.549 172.824C117.613 172.979 117.706 173.119 117.824 173.237C117.941 173.355 118.081 173.449 118.235 173.513C118.389 173.577 118.554 173.61 118.721 173.61Z" fill="#E0E0E0"/>
  <path d="M169.624 76.2129H197.268V46.0628H169.624V76.2129Z" fill="#E0E0E0"/>
  <path d="M167.976 76.2129H196.337V46.0628H167.976V76.2129Z" fill="#F5F5F5"/>
  <path d="M193.958 73.8386V48.4373H170.345V73.8386H193.958Z" fill="white"/>
  <path d="M182.154 54.7161L188.61 65.9026H175.698L182.154 54.7161Z" fill="#F5F5F5"/>
  <path d="M130.843 93.8145H158.487V63.6643H130.843V93.8145Z" fill="#E0E0E0"/>
  <path d="M129.195 93.8145H157.556V63.6643H129.195V93.8145Z" fill="#F5F5F5"/>
  <path d="M155.177 91.4401V66.0388H131.565V91.4401H155.177Z" fill="white"/>
  <path d="M140.486 83.2682L137.685 78.4149C137.393 77.9083 137.24 77.334 137.241 76.7496C137.241 76.1652 137.396 75.5912 137.688 75.0853C137.981 74.5793 138.401 74.1592 138.907 73.8671C139.414 73.575 139.988 73.4211 140.572 73.4209H146.188C146.772 73.4217 147.346 73.5758 147.852 73.868C148.358 74.1601 148.778 74.58 149.071 75.0856C149.364 75.5912 149.519 76.1648 149.52 76.7491C149.522 77.3333 149.37 77.9078 149.08 78.4149L146.279 83.2682C145.987 83.7786 145.565 84.2028 145.057 84.4978C144.548 84.7928 143.97 84.9482 143.382 84.9482C142.794 84.9482 142.217 84.7928 141.708 84.4978C141.199 84.2028 140.778 83.7786 140.486 83.2682Z" fill="#F5F5F5"/>
  <path d="M143.691 45.082H39.0349L45.9221 187.611H150.578L143.691 45.082Z" fill="#D7D7D7"/>
  <path opacity="0.2" d="M143.691 45.082H39.0349L45.9221 187.611H150.578L143.691 45.082Z" fill="black"/>
  <path d="M144.658 45.082H40.002L46.8937 187.611H151.55L144.658 45.082Z" fill="#D7D7D7"/>
  <path opacity="0.2" d="M139.133 49.8765H44.7871L51.3792 181.169L133.417 181.06L147.051 168.974L139.133 49.8765Z" fill="black"/>
  <path d="M139.855 49.8718C140.861 89.1911 144.036 128.425 149.366 167.394C141.89 172.54 134.452 177.685 127.052 182.83H56.4912C49.8312 138.797 45.9223 94.3914 44.7871 49.8718H139.855Z" fill="white"/>
  <path d="M149.366 167.394C141.89 172.54 134.452 177.685 127.052 182.83C128.668 176.02 130.352 169.21 132.105 162.4L149.366 167.394Z" fill="#EBEBEB"/>
  <path d="M70.37 61.8847C70.5486 66.691 70.7575 71.5004 70.9966 76.3128H56.573C56.3309 71.5004 56.122 66.691 55.9465 61.8847H70.37ZM71.841 60.3638H54.3711C54.5739 66.1841 54.8266 72.0074 55.1293 77.8337H72.6037C72.3011 72.0104 72.0483 66.1871 71.8455 60.3638H71.841Z" fill="#D7D7D7"/>
  <path d="M129.308 67.301H79.904C79.8586 66.2159 79.8177 65.1263 79.7769 64.0413H129.177C129.217 65.1263 129.263 66.2159 129.308 67.301Z" fill="#E0E0E0"/>
  <path d="M118.871 74.1562H80.2082C80.1582 73.0666 80.1037 71.9815 80.0583 70.8965H118.716C118.768 71.9831 118.819 73.0696 118.871 74.1562Z" fill="#E0E0E0"/>
  <path d="M71.7865 90.1418C72.0892 94.9542 72.4267 99.7666 72.799 104.579H58.3709C57.9986 99.7666 57.6611 94.9542 57.3584 90.1418H71.7865ZM73.2121 88.6208H55.7422C56.0993 94.4472 56.5064 100.274 56.9634 106.1H74.4561C74.0021 100.277 73.5935 94.4502 73.2303 88.6208H73.2121Z" fill="#D7D7D7"/>
  <path d="M99.6077 95.5623H81.4477C81.375 94.4728 81.2978 93.3877 81.2297 92.2981H99.3897C99.4578 93.3877 99.5305 94.4728 99.6077 95.5623Z" fill="#E0E0E0"/>
  <path d="M116.801 95.5623H103.448C103.376 94.4728 103.299 93.3877 103.23 92.2981H116.583C116.651 93.3877 116.723 94.4728 116.801 95.5623Z" fill="#E0E0E0"/>
  <path d="M125.181 102.422H81.9469C81.8652 101.333 81.788 100.248 81.7063 99.1582H124.941C125.022 100.248 125.1 101.333 125.181 102.422Z" fill="#E0E0E0"/>
  <path d="M73.9519 118.412C74.3847 123.225 74.8508 128.037 75.3502 132.849H60.9221C60.4227 128.037 59.9566 123.225 59.5238 118.412H73.9519ZM75.3412 116.891H57.8667C58.3812 122.721 58.9442 128.549 59.5556 134.375H77.03C76.4247 128.546 75.8618 122.718 75.3412 116.891Z" fill="#D7D7D7"/>
  <path d="M133.521 127.433H84.1125L84.4394 130.693H133.848L133.521 127.433Z" fill="#E0E0E0"/>
  <path d="M122.126 120.573H83.4634C83.5633 121.658 83.6631 122.748 83.7676 123.833H122.426C122.326 122.748 122.221 121.672 122.126 120.573Z" fill="#E0E0E0"/>
  <path d="M76.8712 146.683C77.4342 151.495 78.0289 156.306 78.6554 161.115H64.2273C63.6008 156.309 63.006 151.498 62.4431 146.683H76.8712ZM78.2332 145.162H60.7451C61.411 150.991 62.1298 156.816 62.9016 162.636H80.3579C79.5922 156.816 78.8733 150.991 78.2014 145.162H78.2332Z" fill="#D7D7D7"/>
  <path d="M136.241 152.09H86.8321C86.7004 151 86.5688 149.915 86.4417 148.826H135.846C135.978 149.929 136.105 151.014 136.241 152.09Z" fill="#E0E0E0"/>
  <path d="M110.181 158.959H87.69C87.5493 157.874 87.4131 156.784 87.2769 155.699H109.768C109.904 156.784 110.04 157.874 110.181 158.959Z" fill="#E0E0E0"/>
  <path d="M123.611 158.959H113.899C113.759 157.874 113.623 156.784 113.486 155.699H123.197C123.334 156.784 123.488 157.874 123.611 158.959Z" fill="#E0E0E0"/>
  <path d="M64.0139 74.2516L63.3738 73.2346C61.9755 71.01 59.1243 69.026 58.1392 68.4449L58.8746 67.1419C60.8075 68.3157 62.5344 69.7988 63.9867 71.5321C66.184 68.5403 69.4347 65.4485 73.8839 62.1252L74.8237 63.351C70.0748 66.9059 66.7515 70.161 64.6541 73.2936L64.0139 74.2516Z" fill="#D7D7D7"/>
  <path d="M65.7392 102.518L65.0718 101.501C63.619 99.2762 60.7134 97.2877 59.7146 96.7065L60.4092 95.4036C62.3789 96.5777 64.1464 98.0616 65.6438 99.7983C67.7595 96.8019 70.9239 93.7101 75.2868 90.3823C75.6091 90.7909 75.936 91.1995 76.2584 91.6127C71.6049 95.172 68.3678 98.4227 66.3566 101.56C66.1478 101.878 65.9435 102.2 65.7392 102.518Z" fill="#D7D7D7"/>
  <path d="M68.2453 130.861L67.5506 129.844C66.0343 127.619 63.0742 125.631 62.0618 125.054C62.2797 124.6 62.5158 124.183 62.7246 123.751C64.725 124.927 66.5294 126.409 68.0727 128.142C70.1112 125.145 73.1938 122.058 77.4614 118.726L78.4693 119.956C73.9293 123.515 70.7513 126.766 68.8309 129.903L68.2453 130.861Z" fill="#D7D7D7"/>
  <path d="M114.013 174.999C111.334 174.999 109.791 174.009 108.429 173.137C107.067 172.266 105.895 171.512 103.635 171.512C101.374 171.512 100.366 172.302 99.2989 173.137C98.232 173.973 96.9244 174.999 94.2458 174.999C91.5672 174.999 90.0237 174.009 88.6662 173.137C87.3087 172.266 86.1374 171.512 83.872 171.512C81.6065 171.512 80.6032 172.302 79.5363 173.137C78.4694 173.973 77.1618 174.999 74.4878 174.999C71.8137 174.999 70.2656 174.009 68.9036 173.137C67.5416 172.266 66.3748 171.512 64.1093 171.512C64.0503 171.058 63.9868 170.64 63.9277 170.205C66.6063 170.205 68.1454 171.194 69.5074 172.066C70.8694 172.938 72.0362 173.691 74.2971 173.691C76.558 173.691 77.5659 172.901 78.6328 172.066C79.6997 171.231 81.0118 170.205 83.6904 170.205C86.3689 170.205 87.9035 171.194 89.2655 172.066C90.6275 172.938 91.7988 173.691 94.0597 173.691C96.3206 173.691 97.3285 172.901 98.3954 172.066C99.4623 171.231 100.774 170.205 103.453 170.205C106.132 170.205 107.671 171.194 109.033 172.066C110.395 172.938 111.561 173.691 113.827 173.691C113.886 174.127 113.954 174.563 114.013 174.999Z" fill="#EBEBEB"/>
  <path d="M117.854 48.6097C116.319 44.5237 112.773 41.8406 108.96 41.8406H101.187C100.609 41.8355 100.044 41.6608 99.5642 41.338C99.084 41.0151 98.7092 40.5585 98.4861 40.0246C97.9367 38.7197 97.0178 37.6038 95.8426 36.8142C94.6674 36.0245 93.2871 35.5955 91.8713 35.5799C90.5017 35.566 89.1635 35.9896 88.0513 36.789C86.9391 37.5885 86.1111 38.722 85.6878 40.0246C85.5154 40.5576 85.1769 41.0213 84.7219 41.3481C84.2668 41.6749 83.7192 41.8474 83.1591 41.8406H75.3911C71.573 41.8406 68.286 44.5373 67.151 48.6097L66.697 50.2305H118.453L117.854 48.6097Z" fill="#8687E7"/>
  <path d="M118.131 51.8286H67.1919C66.7623 51.8236 66.3505 51.6559 66.0396 51.3594C65.7288 51.0628 65.5419 50.6594 65.5166 50.2305C65.5055 50.0245 65.5366 49.8183 65.6081 49.6247C65.6797 49.4312 65.7901 49.2543 65.9326 49.105C66.0751 48.9557 66.2466 48.8372 66.4366 48.7567C66.6267 48.6762 66.8312 48.6355 67.0375 48.637H117.976C118.405 48.6419 118.816 48.809 119.127 49.1046C119.438 49.4002 119.625 49.8025 119.652 50.2305C119.663 50.437 119.633 50.6437 119.561 50.8378C119.49 51.0319 119.38 51.2093 119.237 51.3591C119.095 51.5089 118.923 51.6278 118.733 51.7086C118.542 51.7894 118.337 51.8302 118.131 51.8286Z" fill="#BCBDFF"/>
  <path opacity="0.2" d="M118.131 51.8286H67.1919C66.7623 51.8236 66.3505 51.6559 66.0396 51.3594C65.7288 51.0628 65.5419 50.6594 65.5166 50.2305C65.5055 50.0245 65.5366 49.8183 65.6081 49.6247C65.6797 49.4312 65.7901 49.2543 65.9326 49.105C66.0751 48.9557 66.2466 48.8372 66.4366 48.7567C66.6267 48.6762 66.8312 48.6355 67.0375 48.637H117.976C118.405 48.6419 118.816 48.809 119.127 49.1046C119.438 49.4002 119.625 49.8025 119.652 50.2305C119.663 50.437 119.633 50.6437 119.561 50.8378C119.49 51.0319 119.38 51.2093 119.237 51.3591C119.095 51.5089 118.923 51.6278 118.733 51.7086C118.542 51.7894 118.337 51.8302 118.131 51.8286Z" fill="black"/>
  <path d="M163.858 186.244H160.53L160.198 178.54H163.526L163.858 186.244Z" fill="#FFC3BD"/>
  <path d="M183.829 186.244H180.502L178.831 178.54H182.154L183.829 186.244Z" fill="#FFC3BD"/>
  <path d="M180.265 185.859H184.002C184.068 185.858 184.132 185.881 184.183 185.922C184.234 185.963 184.27 186.021 184.283 186.086L184.941 189.046C184.956 189.118 184.955 189.192 184.937 189.263C184.92 189.334 184.887 189.401 184.84 189.457C184.793 189.514 184.735 189.559 184.668 189.59C184.602 189.621 184.529 189.637 184.456 189.636C183.153 189.613 182.517 189.536 180.874 189.536C179.861 189.536 177.777 189.64 176.384 189.64C174.99 189.64 174.804 188.278 175.376 188.138C177.941 187.575 178.903 186.803 179.725 186.063C179.874 185.931 180.066 185.859 180.265 185.859Z" fill="#263238"/>
  <path d="M160.553 185.859H164.185C164.251 185.858 164.315 185.881 164.366 185.922C164.417 185.963 164.453 186.021 164.466 186.086L165.125 189.046C165.141 189.115 165.141 189.187 165.126 189.257C165.111 189.326 165.081 189.392 165.037 189.448C164.994 189.505 164.938 189.551 164.875 189.583C164.812 189.616 164.742 189.634 164.671 189.636C163.358 189.613 161.465 189.536 159.817 189.536C157.892 189.536 156.231 189.64 153.97 189.64C152.608 189.64 152.226 188.278 152.798 188.138C155.4 187.566 157.525 187.507 159.772 186.117C160.004 185.963 160.274 185.874 160.553 185.859Z" fill="#263238"/>
  <path d="M167.072 64.8857C166.618 67.3192 166.355 70.3337 168.057 71.9591C168.057 71.9591 167.081 74.4288 162.559 74.4288C158.428 74.4288 160.498 71.9591 160.498 71.9591C163.222 71.3098 163.068 67.9548 162.596 66.0571L167.072 64.8857Z" fill="#FFC3BD"/>
  <path d="M159.2 72.2995C159.291 71.6957 160.353 70.992 161.56 70.7287C162.768 70.4653 167.408 69.8797 168.825 70.4653C170.241 71.051 168.579 72.7853 168.579 72.7853L159.2 72.2995Z" fill="#D7D7D7"/>
  <path opacity="0.4" d="M159.2 72.2995C159.291 71.6957 160.353 70.992 161.56 70.7287C162.768 70.4653 167.408 69.8797 168.825 70.4653C170.241 71.051 168.579 72.7853 168.579 72.7853L159.2 72.2995Z" fill="white"/>
  <path opacity="0.2" d="M160.198 178.545L160.371 182.513H163.699L163.526 178.545H160.198Z" fill="black"/>
  <path opacity="0.2" d="M182.159 178.545H178.831L179.693 182.513H183.021L182.159 178.545Z" fill="black"/>
  <path d="M174.949 74.9556L170.94 77.6342C170.94 77.6342 176.697 87.8719 176.216 89.5108C175.557 91.7445 174.64 96.625 173.392 99.1038C173.555 99.6395 174.386 100.861 174.849 101.07C178.027 98.6544 181.237 91.0816 181.119 88.9615C180.842 84.1536 174.949 74.9556 174.949 74.9556Z" fill="#FFC3BD"/>
  <path d="M173.392 99.1128L170.214 98.8677L171.88 102.368C171.88 102.368 174.654 102.491 175.117 100.37L173.392 99.1128Z" fill="#B55B52"/>
  <path d="M189.1 116.183L188.832 116.687L187.035 120.088L123.211 86.3419L125.272 82.4375L189.1 116.183Z" fill="#D7D7D7"/>
  <path d="M193.227 108.388L191.911 110.876L191.166 112.283L127.338 78.5375L129.399 74.6331L193.227 108.388Z" fill="#D7D7D7"/>
  <path d="M127.359 78.5262L125.293 82.4258L189.095 116.221L191.161 112.322L127.359 78.5262Z" fill="#D7D7D7"/>
  <path opacity="0.2" d="M127.359 78.5262L125.293 82.4258L189.095 116.221L191.161 112.322L127.359 78.5262Z" fill="black"/>
  <path d="M120.46 75.1507L118.603 78.6647L123.211 86.3418L129.399 74.6377L120.46 75.1507Z" fill="#D7D7D7"/>
  <path opacity="0.8" d="M120.46 75.1507L118.603 78.6647L123.211 86.3418L129.399 74.6377L120.46 75.1507Z" fill="white"/>
  <path d="M116.628 75.3731L118.603 78.6646L120.46 75.1506L116.628 75.3731Z" fill="#D7D7D7"/>
  <path d="M167.658 100.461L169.319 103.557L171.894 102.368L170.227 98.8677L167.658 100.461Z" fill="#B55B52"/>
  <path d="M173.996 72.7128C177.142 73.1668 180.747 84.0628 180.747 84.0628L174.136 87.7946C174.136 87.7946 171.226 82.6281 169.796 78.7691C168.289 74.7331 170.622 72.2225 173.996 72.7128Z" fill="#8687E7"/>
  <path opacity="0.2" d="M172.166 76.4492C170.736 75.1417 171.612 80.7395 172.293 84.3215C172.643 85.0207 172.974 85.6563 173.256 86.1875C174.849 83.3727 174.136 78.2516 172.166 76.4492Z" fill="black"/>
  <path d="M155.363 72.8853C155.363 72.8853 151.436 82.9278 155.164 101.633H172.974C173.097 98.9086 171.381 85.5791 174.014 72.7128C172.047 72.333 170.057 72.0812 168.057 71.9591C165.54 71.8138 163.016 71.8138 160.498 71.9591C158.765 72.1324 157.048 72.4421 155.363 72.8853Z" fill="#8687E7"/>
  <path d="M158.101 77.5525L153.615 75.7773C153.615 75.7773 148.449 86.3238 146.805 86.8549C144.595 87.5813 140.055 89.5789 137.303 89.9694C136.958 90.4234 136.423 91.7854 136.509 92.2848C140.3 93.5242 148.367 91.8807 150.038 90.5823C153.87 87.6222 158.101 77.5525 158.101 77.5525Z" fill="#FFC3BD"/>
  <path opacity="0.2" d="M158.605 76.3539C157.865 74.6469 156.448 73.9341 154.973 74.1838C154.401 76.2767 153.434 80.8757 153.611 87.8038L154.669 88.3123C154.669 88.3123 159.872 79.2731 158.605 76.3539Z" fill="black"/>
  <path d="M159.313 75.1597C160.43 78.138 154.773 86.9002 154.773 86.9002L148.118 83.2682C149.118 80.5429 150.407 77.9326 151.963 75.4821C154.301 71.9908 158.083 71.8955 159.313 75.1597Z" fill="#8687E7"/>
  <path d="M137.467 89.9602L133.508 90.8001L135.514 94.4639C136.621 93.9134 137.626 93.1797 138.488 92.2938L137.467 89.9602Z" fill="#FFC3BD"/>
  <path d="M131.637 91.631L133.217 93.8193L135.515 94.4821L133.508 90.8184L131.637 91.631Z" fill="#FFC3BD"/>
  <path d="M159.527 61.3855C159.527 61.6534 159.359 61.8395 159.182 61.8395C159.004 61.8395 158.877 61.6035 158.896 61.3356C158.914 61.0677 159.064 60.8816 159.241 60.8816C159.418 60.8816 159.545 61.1177 159.527 61.3855Z" fill="#263238"/>
  <path d="M159.763 61.4082C159.396 62.2081 158.921 62.9536 158.351 63.6237C158.526 63.7655 158.73 63.8671 158.949 63.9212C159.168 63.9754 159.396 63.9807 159.617 63.937L159.763 61.4082Z" fill="#ED847E"/>
  <path d="M159.186 60.4592C159.162 60.4541 159.139 60.4449 159.118 60.432C159.1 60.4209 159.085 60.4064 159.073 60.3894C159.061 60.3723 159.053 60.353 159.049 60.3327C159.045 60.3123 159.045 60.2913 159.049 60.2709C159.053 60.2506 159.061 60.2312 159.073 60.214C159.204 60.0014 159.384 59.8231 159.598 59.6937C159.812 59.5642 160.054 59.4874 160.303 59.4695C160.344 59.4717 160.384 59.4891 160.413 59.5184C160.442 59.5478 160.46 59.5869 160.462 59.6284C160.462 59.6705 160.445 59.7109 160.415 59.7407C160.386 59.7705 160.345 59.7873 160.303 59.7873C160.109 59.8053 159.923 59.8685 159.758 59.9718C159.593 60.0751 159.455 60.2156 159.354 60.382C159.338 60.4108 159.313 60.4337 159.282 60.4476C159.252 60.4614 159.219 60.4655 159.186 60.4592Z" fill="#263238"/>
  <path d="M168.552 61.1538C168.162 64.4317 168.098 66.3658 166.341 67.9638C163.694 70.361 159.722 68.6221 159.122 65.2898C158.587 62.2934 159.318 57.4401 162.614 56.3142C163.339 56.0633 164.116 56.0018 164.872 56.1357C165.628 56.2696 166.337 56.5944 166.931 57.0792C167.526 57.564 167.988 58.1929 168.271 58.906C168.555 59.6191 168.651 60.3929 168.552 61.1538Z" fill="#FFC3BD"/>
  <path d="M161.947 61.794C160.798 62.021 158.964 59.4696 160.462 57.304C159.704 56.9272 157.229 58.4163 156.299 57.027C155.368 55.6378 157.951 54.8978 157.456 53.7219C159.209 54.0806 156.321 56.2689 157.988 56.0555C159.654 55.8421 161.574 52.764 163.436 54.0261C166.727 56.2371 171.213 52.5506 169.383 57.1678C171.626 56.7138 173.16 59.3651 171.022 61.2038C166.759 64.8585 169.383 65.3398 166.682 65.5259C165.329 65.6258 162.183 64.0141 161.947 61.794Z" fill="#263238"/>
  <path d="M163.649 62.6522C163.492 62.9799 163.271 63.2728 162.999 63.5137C162.726 63.7547 162.409 63.9387 162.065 64.055C161.157 64.3683 160.634 63.5556 160.848 62.6612C161.039 61.8531 161.756 60.7181 162.696 60.7998C162.902 60.82 163.1 60.8915 163.271 61.0079C163.443 61.1243 163.582 61.2819 163.677 61.4662C163.772 61.6504 163.819 61.8556 163.814 62.0627C163.809 62.2699 163.752 62.4726 163.649 62.6522Z" fill="#FFC3BD"/>
  <path d="M161.474 101.633C161.474 101.633 165.252 127.057 167.322 136.591C169.592 147.033 178.141 181.759 178.141 181.759H184.233C184.233 181.759 178.599 147.863 177.301 137.535C175.898 126.33 172.956 101.646 172.956 101.646L161.474 101.633Z" fill="#D7D7D7"/>
  <path opacity="0.2" d="M161.474 101.633C161.474 101.633 165.252 127.057 167.322 136.591C169.592 147.033 178.141 181.759 178.141 181.759H184.233C184.233 181.759 178.599 147.863 177.301 137.535C175.898 126.33 172.956 101.646 172.956 101.646L161.474 101.633Z" fill="white"/>
  <path opacity="0.2" d="M165.96 110.522C165.678 110.122 165.424 109.986 165.188 110.068H165.138C165.084 110.091 165.034 110.122 164.988 110.159C164.94 110.198 164.896 110.242 164.857 110.29L164.784 110.381L164.689 110.531C164.61 110.663 164.541 110.801 164.484 110.944C164.448 111.03 164.412 111.121 164.38 111.212C164.348 111.303 164.298 111.443 164.262 111.571C164.226 111.698 164.157 111.916 164.107 112.102C164.107 112.152 164.085 112.197 164.071 112.247C164.058 112.297 164.021 112.456 163.999 112.56C163.976 112.665 163.958 112.742 163.94 112.833C163.899 113.01 163.862 113.196 163.826 113.387C163.79 113.577 163.749 113.8 163.713 114.013C163.713 114.086 163.69 114.158 163.676 114.236C163.631 114.508 163.59 114.785 163.549 115.071C164.557 121.4 165.755 128.655 166.727 133.717C166.772 133.553 166.822 133.381 166.863 133.195C167.062 132.35 167.213 131.495 167.317 130.634C168.175 124.11 167.78 113.123 165.96 110.522Z" fill="black"/>
  <path d="M155.164 101.633C155.164 101.633 154.71 126.503 155.068 136.65C155.445 147.201 159.132 181.745 159.132 181.745H164.766C164.766 181.745 164.97 147.813 165.22 137.453C165.492 126.158 166.854 101.633 166.854 101.633H155.164Z" fill="#D7D7D7"/>
  <path opacity="0.2" d="M155.164 101.633C155.164 101.633 154.71 126.503 155.068 136.65C155.445 147.201 159.132 181.745 159.132 181.745H164.766C164.766 181.745 164.97 147.813 165.22 137.453C165.492 126.158 166.854 101.633 166.854 101.633H155.164Z" fill="white"/>
  <path d="M165.138 180.02C165.161 180.02 165.138 181.859 165.138 181.859H158.641L158.369 179.793L165.138 180.02Z" fill="#263238"/>
  <path d="M184.233 180.156C184.26 180.156 184.537 181.859 184.537 181.859H177.841L177.251 179.907L184.233 180.156Z" fill="#263238"/>
  <path d="M179.167 186.44C178.94 186.458 178.715 186.399 178.527 186.272C178.465 186.222 178.418 186.158 178.39 186.085C178.361 186.011 178.352 185.932 178.363 185.854C178.364 185.809 178.376 185.764 178.399 185.725C178.422 185.686 178.455 185.654 178.495 185.632C178.862 185.446 179.938 186.086 180.061 186.176C180.074 186.186 180.083 186.198 180.089 186.213C180.094 186.227 180.096 186.243 180.093 186.258C180.09 186.273 180.084 186.288 180.073 186.299C180.063 186.31 180.049 186.318 180.034 186.322C179.75 186.393 179.459 186.432 179.167 186.44ZM178.672 185.754C178.637 185.747 178.602 185.747 178.567 185.754C178.552 185.763 178.539 185.777 178.53 185.793C178.521 185.809 178.517 185.827 178.517 185.845C178.51 185.898 178.517 185.952 178.536 186.002C178.555 186.052 178.586 186.096 178.626 186.131C178.997 186.303 179.42 186.326 179.807 186.195C179.46 185.976 179.075 185.827 178.672 185.754Z" fill="#D7D7D7"/>
  <path d="M180.016 186.326C180.004 186.33 179.991 186.33 179.979 186.326C179.634 186.14 178.971 185.418 179.04 185.041C179.051 184.984 179.082 184.932 179.128 184.895C179.173 184.857 179.23 184.837 179.289 184.837C179.349 184.828 179.41 184.832 179.468 184.85C179.526 184.867 179.58 184.897 179.625 184.937C180.011 185.25 180.079 186.213 180.079 186.254C180.079 186.268 180.075 186.281 180.069 186.294C180.063 186.307 180.054 186.318 180.043 186.326C180.034 186.328 180.025 186.328 180.016 186.326ZM179.344 184.964H179.33C179.226 184.964 179.217 185.023 179.212 185.046C179.171 185.264 179.593 185.813 179.938 186.072C179.915 185.694 179.777 185.331 179.543 185.032C179.514 185.007 179.48 184.989 179.443 184.979C179.407 184.969 179.368 184.967 179.33 184.973L179.344 184.964Z" fill="#D7D7D7"/>
  <path d="M159.168 186.44C158.883 186.466 158.598 186.394 158.36 186.235C158.308 186.188 158.267 186.128 158.242 186.062C158.217 185.996 158.207 185.925 158.215 185.854C158.215 185.811 158.227 185.769 158.249 185.732C158.271 185.695 158.303 185.665 158.342 185.645C158.746 185.418 160.085 186.099 160.235 186.176C160.25 186.183 160.262 186.195 160.27 186.21C160.277 186.225 160.279 186.242 160.276 186.258C160.274 186.274 160.266 186.289 160.255 186.301C160.243 186.312 160.228 186.32 160.212 186.322C159.869 186.395 159.519 186.435 159.168 186.44ZM158.564 185.754C158.514 185.752 158.465 185.762 158.419 185.781C158.404 185.79 158.391 185.803 158.382 185.818C158.374 185.833 158.369 185.85 158.369 185.868C158.362 185.914 158.368 185.961 158.384 186.005C158.401 186.048 158.429 186.087 158.464 186.117C158.669 186.299 159.218 186.331 159.953 186.208C159.519 185.98 159.049 185.827 158.564 185.754Z" fill="#D7D7D7"/>
  <path d="M160.198 186.326H160.167C159.763 186.145 158.968 185.418 159.032 185.05C159.032 184.964 159.109 184.851 159.322 184.833C159.403 184.821 159.485 184.826 159.564 184.849C159.642 184.872 159.714 184.911 159.776 184.964C160.198 185.314 160.285 186.208 160.289 186.249C160.291 186.262 160.289 186.276 160.284 186.288C160.278 186.3 160.269 186.31 160.257 186.317C160.24 186.327 160.219 186.331 160.198 186.326ZM159.386 184.964H159.354C159.213 184.964 159.204 185.032 159.2 185.055C159.163 185.277 159.704 185.845 160.108 186.09C160.068 185.709 159.91 185.35 159.654 185.064C159.576 185.006 159.482 184.974 159.386 184.973V184.964Z" fill="#D7D7D7"/>
  </svg>
  <p>
      what do you want to do today ?
  </p>
  <p>
      tap <span class="plus-symbol">+</span> to add your tasks
  </p>
  `
]
   
 function  addTask(){
 dialogueBox.style.display='flex'
   gsap.from(  ['#input-dialogue'],{
  //  opacity:0,
  width:'0',
   height:'0%',
    duration:0.5
   }
   )
 }

 function closeDialogue(){
   
  dialogueBox.style.display='none'
   
 }
  
 function openDateInput(){
  $('.datetimeoutercontainer').css('display','flex')
    gsap.fromTo(dateDialogue,{
      opacity:0,
      width:0,
 
    },
    {
      opacity:1,
      width:'100%',
      maxWidth: "390px",
      duration:0.5
    })
 }
 function closeDialog(){
  console.log('function triggered');
  gsap.to(dateDialogue,{
    opacity:0,
    width:50,
    duration:0.5,
    onComplete:close
  })
   
 }

 function close(){
  $('.datetimeoutercontainer').css('display','none')
}

 function close_save_dateDialogue(){
  const task_time=$('#datepicker').val()
   
  $('#task-time').html(task_time)

   let tm=gsap.timeline()
  tm.to(dateDialogue,{
    opacity:0,
    width:50,
    duration:0.5,
    onComplete:close
  })
  tm.from('#task-time',{
    opacity:0,
    duration:0.5,
    x:-20
  })
  
 }  

 $(document).ready(function() {
  $('#datepicker').datetimepicker(
    {
      minDate:new Date(),
      showTodayButton: true,
      showClose: true,
      ignoreReadonly: true
       
       
    }
  );
  
});
 


  let  categoriesValue=''
  let chosenCategoriesColor=0
  let originalColors=[
    '#add8e6',
    '#90ee90',
    '#ffa07a',
    '#c9a0dc',
    '#ffff99',
    '#87ceeb',
    '#ffb6c1',
    '#f4a460',
    '#ff6347',
    '#e0ffff',
    '#d3d3d3',
    '#afeeee'
      ]

  $('#category-middle section i').on('click',function(){
 

   $('#category-middle section i').each(function(i){ 
    $(this).css('background-color',originalColors[i])
   }) 

    $(this).css('background-color','#8687E7')
     categoriesValue=$(this).attr('value')
     chosenCategoriesColor=$(this).index()

  })

const closeCategories=()=>{
  $('#category').css('display','none')
}
const close_save_Categories=()=>{
  console.log('default color', originalColors[chosenCategoriesColor]);
        $('#category-value').html(categoriesValue)
        $('#category-value').css({
          'color':originalColors[chosenCategoriesColor]
        })
        gsap.from('#category-value',{
          opacity:0,
          duration:0.5,
          x:-20
        })
         
  $('#category').css({
    'display':'none'
})

}
const openCategories=()=>{
  $('#category').css({
    'display':'flex'
})
const tl=gsap.timeline()

 tl.from('#category',{
  
   y:-200,
   opacity:0,
  duration:0.5
 })
  
}