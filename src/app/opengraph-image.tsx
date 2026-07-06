import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Ehsan Ud Din — GHL Automation Engineer';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#050505',
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(37,99,235,0.25) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(29,78,216,0.18) 0%, transparent 50%)',
          padding: 80,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontSize: 32,
            fontWeight: 900,
            color: '#ffffff',
            textTransform: 'uppercase',
            letterSpacing: 4,
            marginBottom: 40,
          }}
        >
          Ehsan<span style={{ color: '#2563eb' }}>.</span>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            fontSize: 64,
            fontWeight: 900,
            color: '#ffffff',
            textTransform: 'uppercase',
            letterSpacing: -2,
            lineHeight: 1.05,
            textAlign: 'center',
            maxWidth: 980,
          }}
        >
          Elite AI Integrations &amp; GHL Automation Engineering
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 32,
            fontSize: 26,
            color: '#9ca3af',
            fontWeight: 500,
          }}
        >
          Full-Stack AI &amp; Automation Engineer · GoHighLevel Specialist
        </div>
      </div>
    ),
    { ...size }
  );
}
