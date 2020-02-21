import { KakaoMap, withJs, withKakaoMap } from "react-kakaomap-api";

const Kakao = withJs(
  // `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&libraries=services,clusterer,drawing&autoload=false`
)(withKakaoMap(KakaoMap));

export default Kakao;
