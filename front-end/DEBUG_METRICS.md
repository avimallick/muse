# 🐛 Debugging Guide: MetricCard Stats Not Showing

## Issue
The analytics stats (1.2M views, 156K likes, etc.) are not displaying properly in the MetricCard components.

## Potential Causes & Solutions

### 1. Custom Color Classes Not Generated
**Problem**: Tailwind might not be generating the custom color classes.

**Solution**: We've updated the `MetricCard` component to use explicit color mappings.

### 2. Check if Analytics Data is Received
Add this debug code temporarily to `StepAnalytics.tsx`:

```tsx
// Add this at the top of the StepAnalytics component
console.log('Analytics data:', analytics);
```

### 3. Verify Custom Colors in Tailwind
Make sure these colors are working by testing them directly:

```tsx
// Test component - add to any page temporarily
<div className="text-coral-red bg-coral-red/10 border-coral-red">
  Test coral-red color
</div>
```

### 4. Manual Override (Temporary Fix)
If custom colors aren't working, use standard Tailwind colors temporarily:

```tsx
// In MetricCard component
const styles = {
  bg: 'bg-gradient-to-br from-red-100 to-red-50',
  text: 'text-red-600', 
  border: 'border-red-200'
};
```

### 5. Check Browser Console
1. Open browser dev tools (F12)
2. Look for any console errors
3. Check if the analytics data is actually being set

### 6. Force Tailwind Rebuild
If using Vite:
```bash
rm -rf node_modules/.vite
npm run dev
```

## Quick Test
To verify the component works, try this simple test in your browser console:
```javascript
console.log(document.querySelector('[data-analytics]')); // Should show the analytics container
```

## Files Changed
- `DisplayComponents.tsx` - Updated MetricCard with explicit color handling
- `StepAnalytics.tsx` - Added navigation and better styling
- `FeedbackComponents.tsx` - New feedback components

Let me know what you see in the browser console and we can debug further!