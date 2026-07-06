import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#050505',
          borderRadius: 14,
          fontSize: 40,
          fontWeight: 900,
          color: '#ffffff',
        }}
      >
        E<span style={{ color: '#2563eb' }}>.</span>
      </div>
    ),
    { ...size }
  );
}
