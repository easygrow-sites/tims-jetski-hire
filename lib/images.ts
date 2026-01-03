// Jetski-specific high-quality Unsplash images
export const serviceImages: Record<string, string[]> = {
  'jetski-rental': [
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200',
    'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1200',
    'https://images.unsplash.com/photo-1537519646099-335be4f3b63c?w=1200',
  ],
  'guided-jetski-tours': [
    'https://images.unsplash.com/photo-1621273931234-1dde462bb257?w=1200',
    'https://images.unsplash.com/photo-1535579710123-3c0f261c474e?w=1200',
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200',
  ],
  'jetski-lessons': [
    'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200',
    'https://images.unsplash.com/photo-1535579710123-3c0f261c474e?w=1200',
    'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=1200',
  ],
  'group-bookings': [
    'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1200',
    'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200',
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200',
  ],
  'jetski-fishing': [
    'https://images.unsplash.com/photo-1544551763-92359e29a0e6?w=1200',
    'https://images.unsplash.com/photo-1534943441045-1974c7a54066?w=1200',
    'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1200',
  ],
  'sunset-jetski-rides': [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200',
    'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1200',
    'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1200',
  ],
  'wave-runner-hire': [
    'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200',
    'https://images.unsplash.com/photo-1566024287286-457247b70310?w=1200',
    'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200',
  ],
  'jetski-safari-adventures': [
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200',
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200',
    'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200',
  ],
  'private-jetski-charters': [
    'https://images.unsplash.com/photo-1484804959297-65e7c19d7c9f?w=1200',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200',
    'https://images.unsplash.com/photo-1537519646099-335be4f3b63c?w=1200',
  ],
  'corporate-jetski-events': [
    'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200',
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200',
  ],
  'birthday-jetski-packages': [
    'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200',
    'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200',
    'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200',
  ],
  'jetski-racing-experiences': [
    'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=1200',
    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200',
    'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200',
  ],
  'default': [
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200',
    'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1200',
    'https://images.unsplash.com/photo-1537519646099-335be4f3b63c?w=1200',
    'https://images.unsplash.com/photo-1621273931234-1dde462bb257?w=1200',
  ],
};

const usedImages = new Set<string>();

export function getUniqueImage(service: string, index: number = 0): string {
  const images = serviceImages[service] || serviceImages['default'];

  // Try to find an unused image
  for (const img of images) {
    if (!usedImages.has(img)) {
      usedImages.add(img);
      return img;
    }
  }

  // If all images used, return based on index
  return images[index % images.length];
}

export function getServiceImage(service: string, index: number = 0): string {
  const images = serviceImages[service] || serviceImages['default'];
  return images[index % images.length];
}

export function resetUsedImages(): void {
  usedImages.clear();
}
