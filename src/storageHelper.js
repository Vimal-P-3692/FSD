// storageHelper.js
export const BOOKINGS_KEY = 'repairmate_bookings';

export function readBookings() {
  try {
    const raw = localStorage.getItem(BOOKINGS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Failed to read bookings from localStorage', err);
    return [];
  }
}

export function saveBookings(bookings) {
  try {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
    // also dispatch a custom event for same-window listeners (optional)
    window.dispatchEvent(new Event('bookings:updated'));
  } catch (err) {
    console.error('Failed to save bookings to localStorage', err);
  }
}

export function addBooking(booking) {
  const all = readBookings();
  all.unshift(booking); // newest first
  saveBookings(all);
  return booking;
}

export function updateBooking(bookingId, updates) {
  const all = readBookings().map(b => (b.id === bookingId ? { ...b, ...updates } : b));
  saveBookings(all);
  return all;
}

