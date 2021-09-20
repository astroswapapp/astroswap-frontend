import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="28" height="23" viewBox="0 0 28 23" {...props}>
      <path
        d="M22.2841 22.741C21.2521 22.921 15.1991 18.2691 15.1991 18.2691C15.1991 18.2691 11.5601 22.1791 10.9991 21.8521C10.1641 21.3671 7.98212 14.0401 7.98212 14.0401C7.98212 14.0401 0.869117 11.858 0.870117 10.888C0.870117 9.15404 25.8471 0.0880449 26.8651 0.759045C28.5901 1.89204 23.9841 22.445 22.2841 22.741Z"
        fill="#E34561"
      />
      <path
        opacity="0.5"
        d="M15.2023 18.2701C15.2023 18.2701 12.7253 21.2881 11.2443 21.8541C11.1332 21.8702 11.0203 21.8702 10.9092 21.8541L11.6472 15.3611L15.2023 18.2701Z"
        fill="#90374B"
      />
      <path
        d="M22.7455 4.62709C23.1305 4.87709 11.6455 15.3611 11.6455 15.3611C11.6455 15.3611 11.4254 21.8241 10.9984 21.8531C10.4604 21.8901 10.2715 21.1801 10.2715 21.1801C10.2715 21.1801 8.95851 17.2441 8.52051 15.8801C8.38551 15.4601 7.98145 14.0431 7.98145 14.0431C7.98145 14.0431 21.7685 3.99409 22.7455 4.62709Z"
        fill="#90374B"
      />
      <path
        opacity="0.2"
        d="M23.2728 18.838C23.5843 18.6746 23.9104 18.5407 24.2468 18.4381C24.3558 18.0771 24.4649 17.7001 24.5739 17.3111C23.6045 17.2503 22.6448 17.5336 21.8639 18.1111C21.4419 18.4021 21.7969 19.1111 22.3639 19.6841L22.3279 19.6731C20.6699 19.2581 19.6629 20.3481 18.2559 20.5191C18.6269 20.7781 19.0049 21.036 19.3759 21.281C19.5083 21.2616 19.642 21.251 19.7759 21.2491C19.9169 21.2721 19.8448 21.3491 19.6628 21.4691C20.1628 21.7961 20.6489 22.0901 21.0629 22.3141C21.8298 22.043 22.5669 21.6942 23.2628 21.273C23.4098 20.922 23.5628 20.517 23.7198 20.067C23.4258 19.555 22.8868 19.06 23.2728 18.838Z"
        fill="#90374B"
      />
      <path
        opacity="0.2"
        d="M16.0143 18.889C16.1233 18.816 16.2423 18.741 16.3723 18.662C16.6433 18.617 16.9054 18.569 17.1544 18.518C17.3249 18.4993 17.4887 18.4408 17.6327 18.3475C17.7767 18.2541 17.8968 18.1283 17.9835 17.9803C18.0701 17.8322 18.121 17.6658 18.1319 17.4946C18.1428 17.3233 18.1135 17.1519 18.0463 16.994C18.8386 17.166 19.6569 17.182 20.4553 17.041C21.1383 16.841 22.2954 17.141 23.3474 16.781C23.9988 16.3805 24.5468 15.8324 24.9473 15.181C25.3583 14.529 22.9314 13.381 23.0474 12.781C23.1648 12.3785 23.3981 12.0196 23.7183 11.749C24.3982 12.062 25.0584 12.4159 25.6953 12.809C25.7953 12.344 25.9004 11.877 25.9954 11.409C25.4744 11.045 25.9173 10.478 25.2953 9.953C23.7443 8.64 23.0163 7.89303 22.0953 7.85303C21.3263 7.81903 18.2783 6.44701 17.6833 6.33701C17.2313 6.25401 15.5593 5.60601 13.4473 4.93701C13.0927 5.07035 12.7386 5.20367 12.3853 5.33701C13.0393 5.61901 16.0264 7.73001 18.1364 7.90701C18.6454 7.95001 14.3073 8.085 15.3803 8.746C15.8033 9.007 18.8614 9.50502 19.1204 8.86502C19.5124 7.89502 20.7204 9.77202 21.4014 10.378C21.8797 10.763 22.4 11.0927 22.9523 11.361C22.4243 11.461 21.6073 11.685 20.8743 11.817C20.2603 11.928 17.6473 10.172 16.5433 10.461C15.5647 10.551 14.5786 10.5174 13.6083 10.361C14.2523 10.153 14.9083 9.80801 14.3853 9.63101C13.8123 9.43601 10.1763 7.72401 9.43335 7.57501C8.97297 7.43271 8.52375 7.25656 8.08936 7.048C7.60936 7.248 7.14133 7.44802 6.68933 7.63702C7.55233 7.73702 8.27735 7.82302 8.48035 7.86102C9.57235 8.06102 13.7654 9.36103 12.8914 10.267C11.9214 10.155 9.46433 9.90303 9.24133 9.92603C9.08933 9.94303 8.95531 9.95701 8.84131 9.97601C7.66241 9.32273 6.39183 8.85077 5.07233 8.57602C4.96433 8.56702 4.79835 8.56403 4.59235 8.56403C3.83135 8.91703 3.15832 9.248 2.60132 9.548C3.75432 9.485 5.01036 9.52703 4.18536 10.112C3.87536 10.332 2.22037 10.363 0.914368 10.731C0.882804 10.7765 0.864128 10.8297 0.860352 10.885C0.860352 11.156 1.41533 11.522 2.21533 11.908C2.21674 11.8742 2.2221 11.8406 2.23132 11.808C2.39532 11.236 5.67233 10.528 5.97833 9.95102C6.17833 9.58202 8.53634 10.49 9.00134 10.576C9.21634 10.717 9.51137 10.891 9.90137 11.111C10.8286 11.2967 11.7815 11.3157 12.7153 11.167C13.9186 11.384 15.1538 11.3499 16.3433 11.067C16.7013 10.906 18.8953 11.981 19.2603 12.048C19.5603 12.104 22.0843 13.854 23.4703 14.511C24.3793 14.942 23.2264 15.702 22.9304 15.878C22.7374 15.993 20.7864 15.747 19.7664 16.385C19.4074 16.609 16.2813 15.33 15.1473 15.355C14.9443 15.3704 14.7433 15.4063 14.5474 15.462C13.1814 15.052 9.71732 15.569 8.43732 15.545C8.50032 15.745 8.56833 15.956 8.63733 16.178C11.3373 16.094 14.7024 16.194 15.7504 16.6C16.4444 16.9 17.3163 17.39 16.1033 17.536C15.5583 17.601 15.0214 18.2 14.2354 18.071C12.5755 17.9052 10.9049 17.8761 9.24036 17.984C9.34936 18.299 9.46136 18.613 9.57336 18.919C10.7976 19.0388 12.0293 19.0635 13.2573 18.993C11.3883 19.714 10.6323 20.88 11.5433 21.129C11.7368 21.1773 11.9337 21.2107 12.1323 21.229C13.2021 20.2955 14.2225 19.3068 15.1893 18.267C15.1893 18.267 15.5173 18.523 16.0143 18.889Z"
        fill="#90374B"
      />
      <path
        opacity="0.2"
        d="M7.96515 11.323C7.84415 11.06 7.16516 11.046 6.55316 11.323C5.94116 11.6 5.43912 11.823 5.56012 12.084C5.68112 12.345 6.35214 12.464 6.96014 12.184C7.56814 11.904 8.08615 11.586 7.96515 11.323Z"
        fill="#90374B"
      />
      <path
        opacity="0.2"
        d="M24.458 1.18103C24.863 1.54102 25.3122 1.84782 25.7949 2.09402C25.8949 2.13602 26.472 2.28503 27.246 2.47803C27.2491 2.15537 27.2294 1.8329 27.187 1.51303C26.7901 1.31308 26.417 1.06887 26.075 0.785034C25.665 0.863034 25.117 0.99803 24.458 1.18103Z"
        fill="#90374B"
      />
      <path
        opacity="0.2"
        d="M23.8801 3.366C22.8447 3.12776 21.8415 2.76722 20.8912 2.29199C20.4799 2.42533 20.0558 2.56633 19.6191 2.715L19.7281 2.793C20.4281 3.281 20.9482 3.12999 21.9872 3.58499C23.1142 4.07899 24.2672 4.62801 24.3712 4.61801C25.0832 4.54601 25.6252 5.49902 26.9092 6.21802C27.0092 5.53102 27.0842 4.88199 27.1392 4.28799C26.1103 3.8052 25.0094 3.49377 23.8801 3.366Z"
        fill="#90374B"
      />
      <path
        opacity="0.2"
        d="M16.397 5.35897C16.84 5.49997 17.2261 5.52897 17.3131 5.25897C17.4001 4.98897 17.1131 4.64997 16.6671 4.50997C16.2211 4.36997 15.7331 4.38097 15.7081 4.75097C15.6881 5.03397 15.954 5.21797 16.397 5.35897Z"
        fill="#90374B"
      />
      <path
        opacity="0.2"
        d="M24.1601 7.15399C24.7731 7.39199 25.32 7.454 25.481 7.04C25.642 6.626 25.275 6.096 24.662 5.859C24.049 5.622 23.3031 5.50398 23.0241 6.00198C22.6811 6.60798 23.5471 6.91699 24.1601 7.15399Z"
        fill="#90374B"
      />
      <path
        d="M10.009 6.28299C9.54274 6.52997 9.10647 6.82997 8.70898 7.177C6.54898 9.112 6.17907 11.594 5.24707 13.116C5.54707 13.224 5.84702 13.327 6.12402 13.422C6.16902 13.357 6.21403 13.292 6.25903 13.228C7.18403 11.548 7.95906 9.22801 10.2111 7.46701C12.4911 5.68901 16.1551 5.51399 18.4301 3.66199C18.6836 3.47405 18.8828 3.22215 19.0071 2.93201C16.1761 3.90701 12.925 5.11999 10.009 6.28299Z"
        fill="#F0DEDA"
      />
      <path
        d="M21.709 15.7641C21.635 15.5401 20.965 15.5641 20.209 15.8091C19.453 16.0541 18.909 16.441 18.981 16.664C19.053 16.887 19.725 16.8641 20.481 16.6191C21.237 16.3741 21.783 15.9881 21.709 15.7641Z"
        fill="#F0DEDA"
      />
      <path
        d="M2.87891 9.41406C2.70727 10.2526 2.2858 11.0196 1.66992 11.614C1.84092 11.714 2.0339 11.8141 2.2439 11.9141C2.2439 11.9141 2.2439 11.914 2.2439 11.907C2.4319 11.998 2.63393 12.0901 2.84393 12.1821C3.48618 11.7564 4.0225 11.1894 4.4118 10.5245C4.80111 9.85963 5.03304 9.11446 5.0899 8.34607C4.2499 8.72807 3.50291 9.08806 2.87891 9.41406Z"
        fill="#F0DEDA"
      />
      <path
        d="M21.78 17.875C19.9693 18.0314 18.1737 18.3303 16.41 18.769C16.286 18.815 16.164 18.869 16.043 18.927C16.517 19.277 17.135 19.727 17.801 20.195C19.336 19.33 21.807 19.169 23.537 18.42C23.8097 18.302 24.082 18.1726 24.354 18.032C24.4267 17.7873 24.499 17.5366 24.571 17.28C24.619 17.1086 24.6673 16.9353 24.7159 16.76C23.8177 17.3163 22.8211 17.6948 21.78 17.875Z"
        fill="#F0DEDA"
      />
      <path
        d="M24.9517 9.59506C23.9647 7.70306 24.1137 5.03806 24.9427 2.62906C25.1227 2.10606 25.3777 1.51406 25.6607 0.883057C25.4394 0.933057 25.193 0.994071 24.9217 1.06607C24.6667 1.59307 24.4018 2.18306 24.1218 2.91806C23.2334 5.12941 23.0489 7.56102 23.5937 9.88104C23.9373 11.0741 24.6783 12.1139 25.6938 12.8281C25.7938 12.3631 25.8987 11.8961 25.9937 11.4281C26.0227 11.2881 26.0517 11.148 26.0807 11.007C25.6187 10.6118 25.2356 10.1327 24.9517 9.59506Z"
        fill="#F0DEDA"
      />
    </Svg>
  )
}

export default Icon