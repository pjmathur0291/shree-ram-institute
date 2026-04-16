# BHM Landing Page Integration

## Files to add:
- `src/components/bhm/` → All BHM components
- `src/pages/HotelManagement.tsx` → Page component
- `src/assets/bhm/` → All 16 images

## Integration Steps:

### 1. Add route in App.tsx:
```tsx
import HotelManagement from "./pages/HotelManagement.tsx";
// Add inside <Routes>:
<Route path="/hotel-management" element={<HotelManagement />} />
```

### 2. Add nav links in your existing Navbar:
```tsx
<Link to="/hotel-management" className="text-sm font-medium text-accent hover:text-accent/80 transition-colors">BHM</Link>
```

### 3. Add nav links in BartendingNavbar too (already included in BHMNavbar).

That's it! The BHM page uses the same Tailwind theme & CSS from index.css.
