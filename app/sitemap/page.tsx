'use client'
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 35.1796,
  lng: 129.0756,
};

export default function SiteMap() {
  const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "" });

  if (loadError) return <div>❌ Google Maps 로드 실패</div>;
  if (!isLoaded) return <div>⏳ 지도 로딩 중...</div>;

  return (
    <div className="p-20 min-h-screen max-w-4xl mx-auto bg-white text-black shadow-md rounded-md">
      {/* 제목 */}
      <h1 className="text-2xl font-bold border-b pb-2 text-center">📍 오시는 길</h1>

      {/* 설명 */}
      <p className="mt-4 text-center text-gray-600">
        아래 지도에서 저희 위치를 확인하실 수 있습니다.
      </p>

      {/* Google Maps */}
      <div className="mt-6 border rounded-md overflow-hidden shadow-md">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </div>



      {/* iframe을 이용한 구글맵 */}
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.986119285303!2d126.92383021174591!3d37.484653928702194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9fb8b8559c9b%3A0xa4cb250bda6d2665!2z7ISc7Jq47Yq567OE7IucIOq0gOyVheq1rCDqtIDsspzroZwgNTYtNg!5e0!3m2!1sko!2skr!4v1740308642842!5m2!1sko!2skr"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe> */}
    </div>
  );
}
