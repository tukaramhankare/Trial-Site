import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// File-based Universal Store path
const DATA_DIR = path.join(process.cwd(), "data");
const STORE_FILE = path.join(DATA_DIR, "universal-state.json");
const SITE_CONFIG_FILE = path.join(process.cwd(), "site-config.json");

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

interface UniversalState {
  version: number;
  updatedAt: string;
  settings: Record<string, any>;
  rooms: Array<any>;
  food: Array<any>;
  promos: Array<any>;
  reviews: Array<any>;
  bookings: Array<any>;
}

// Initial Default State
function getDefaultState(): UniversalState {
  // If site-config.json exists, seed from it
  if (fs.existsSync(SITE_CONFIG_FILE)) {
    try {
      const parsed = JSON.parse(fs.readFileSync(SITE_CONFIG_FILE, "utf-8"));
      return {
        version: 1,
        updatedAt: new Date().toISOString(),
        settings: parsed.settings || {},
        rooms: parsed.rooms || [],
        food: parsed.food || [],
        promos: parsed.promos || [],
        reviews: parsed.reviews || [],
        bookings: []
      };
    } catch (e) {
      console.warn("Failed to parse site-config.json, using hardcoded fallback", e);
    }
  }

  return {
    version: 1,
    updatedAt: new Date().toISOString(),
    settings: {
      hotelName: "Hotel Diamond Executive",
      hotelTagline: "Welcome to Luxury & Comfort",
      hotelAddress: "Chhatrapati Shivaji Maharaj Chowk, Solapur, Maharashtra 413002",
      hotelPhone: "+91 98220 12345",
      hotelEmail: "reservations@hoteldiamondsolapur.com",
      announcementText: "✨ Exclusive Direct Booking Privileges: Complimentary Solapuri Breakfast & Hi-Speed Wi-Fi",
      adminPass: "admin123",
      groupExtraSurcharge: 500,
      groupSupportNote: "Assigned upon Admin Desk approval",
      groupLegalTerms: "Special Access Group Policy: Stays with 5 or more guests require verification at check-in.",
      generalTerms: "Welcome to Hotel Diamond Executive Solapur. Standard Check-In is at 12:00 PM and Check-Out is at 11:00 AM.",
      textHeroBadge: "SOLAPUR'S PREMIER LUXURY RESIDENCE",
      textHeroTitle: "Experience Luxury in Solapur",
      textHeroDesc: "Modern elegance meets Solapuri hospitality. Located at the historic Chhatrapati Shivaji Maharaj Chowk with world-class dining, executive suites, and unmatched comfort.",
      textRoomsTitle: "Rooms & Executive Suites",
      textRoomsBadge: "ACCOMMODATIONS",
      textRoomsDesc: "Designed for unmatched comfort, each room features premium linen, climate control, and modern amenities.",
      textFoodTitle: "In-Room Dining & Food Service",
      textOffersTitle: "Special Offers & Promo Codes",
      secHeroSearch: true,
      secRooms: true,
      enableRoomBooking: true,
      secFood: true,
      enableFoodService: true,
      secOffers: true,
      secReviews: true,
      themePalette: "gold",
      cloudSyncUrl: ""
    },
    rooms: [
      {
        id: "r1",
        title: "Executive Deluxe Room",
        price: 2499,
        capacity: 2,
        status: "Available",
        desc: "Spacious air-conditioned room with king-size bed, workstation, smart TV, and city view.",
        img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
        amenities: ["Free Wi-Fi", "AC", "Smart TV", "Room Service", "Tea/Coffee Maker"]
      },
      {
        id: "r2",
        title: "Diamond Club Suite",
        price: 3999,
        capacity: 3,
        status: "Available",
        desc: "Luxury suite featuring a separate living room lounge, luxury bath, and panoramic Chowk view.",
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        amenities: ["Free Wi-Fi", "Living Area", "Mini Bar", "Bathtub", "Express Check-in"]
      },
      {
        id: "r3",
        title: "Presidential Family Suite",
        price: 5499,
        capacity: 5,
        status: "Available",
        desc: "Grand 2-bedroom suite ideal for families and VIP groups, with dedicated concierge service.",
        img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
        amenities: ["2 King Beds", "Balcony View", "Dining Area", "24/7 Butler", "Complimentary Breakfast"]
      },
      {
        id: "r4",
        title: "Standard Classic Room",
        price: 1899,
        capacity: 2,
        status: "Available",
        desc: "Comfortable room designed for business travelers and short stays in Solapur center.",
        img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
        amenities: ["Free Wi-Fi", "AC", "Work Desk", "Hot Water 24/7"]
      }
    ],
    food: [
      {
        id: "f1",
        title: "Solapuri Shenga Chutney Thali",
        price: 260,
        category: "Solapuri Specialties",
        type: "veg",
        desc: "Traditional Solapuri peanut chutney, jowar bhakri, pitla, thecha, and seasonal vegetable curry."
      },
      {
        id: "f2",
        title: "Special Solapuri Mutton Sukka",
        price: 380,
        category: "Solapuri Specialties",
        type: "nonveg",
        desc: "Authentic spicy Solapur masala mutton roasted in authentic dry spices and rich gravy."
      },
      {
        id: "f3",
        title: "Executive Continental Breakfast",
        price: 220,
        category: "Breakfast",
        type: "veg",
        desc: "Choice of eggs or poha/upma, toast, butter, preserves, fresh juice, and masala chai."
      },
      {
        id: "f4",
        title: "Paneer Butter Masala & Butter Naan",
        price: 290,
        category: "Main Course",
        type: "veg",
        desc: "Rich cottage cheese cubes simmered in velvety tomato-butter gravy with 2 tandoori naans."
      },
      {
        id: "f5",
        title: "Fresh Solapuri Masala Chaas",
        price: 60,
        category: "Beverages",
        type: "veg",
        desc: "Chilled spiced buttermilk infused with fresh coriander, ginger, cumin, and roasted peanuts."
      }
    ],
    promos: [
      { code: "WELCOME10", discount: 10, title: "10% Off First Reservation" },
      { code: "SOLAPUR20", discount: 20, title: "20% Off Weekend Executive Stays" },
      { code: "SPECIAL5", discount: 15, title: "15% Off Special Access Stays" }
    ],
    reviews: [
      {
        name: "Rajesh Deshmukh",
        rating: 5,
        comment: "Superb location at Shivaji Chowk. The Executive Suite was spotless, and the Solapuri food was exceptional!",
        date: "2026-08-10"
      },
      {
        name: "Pooja Kulkarni",
        rating: 5,
        comment: "Very polite staff and smooth online booking. The e-voucher receipt with electronic verification was recognized immediately at check-in.",
        date: "2026-08-04"
      },
      {
        name: "Amit Shah",
        rating: 4,
        comment: "Great business stay in central Solapur. Wi-Fi was fast, and the in-room dining service was quick.",
        date: "2026-07-28"
      }
    ],
    bookings: []
  };
}

// Load state from file or initialize
let universalState: UniversalState = (() => {
  if (fs.existsSync(STORE_FILE)) {
    try {
      const data = fs.readFileSync(STORE_FILE, "utf-8");
      const parsed = JSON.parse(data);
      if (parsed && typeof parsed === "object" && parsed.settings) {
        return parsed;
      }
    } catch (e) {
      console.warn("Could not read universal-state.json, loading defaults", e);
    }
  }
  const initial = getDefaultState();
  try {
    fs.writeFileSync(STORE_FILE, JSON.stringify(initial, null, 2), "utf-8");
  } catch (e) {
    console.warn("Could not persist initial state to data dir", e);
  }
  return initial;
})();

function persistState() {
  universalState.version = (universalState.version || 0) + 1;
  universalState.updatedAt = new Date().toISOString();
  try {
    fs.writeFileSync(STORE_FILE, JSON.stringify(universalState, null, 2), "utf-8");
  } catch (e) {
    console.error("Failed to write universal state to disk", e);
  }
}

// API Routes (Universal Controller Endpoints)

// 1. Health check & current state version for multi-device sync
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    version: universalState.version,
    updatedAt: universalState.updatedAt,
    serverTime: new Date().toISOString()
  });
});

// 2. Get complete live state for any visiting client device
app.get("/api/state", (req, res) => {
  res.json({
    success: true,
    version: universalState.version,
    updatedAt: universalState.updatedAt,
    settings: universalState.settings,
    rooms: universalState.rooms,
    food: universalState.food,
    promos: universalState.promos,
    reviews: universalState.reviews
  });
});

// 3. Fast sync-poll endpoint to detect live changes across devices
app.get("/api/sync-poll", (req, res) => {
  const clientVersion = parseInt(req.query.v as string, 10) || 0;
  if (clientVersion < universalState.version) {
    return res.json({
      outdated: true,
      version: universalState.version,
      updatedAt: universalState.updatedAt,
      settings: universalState.settings,
      rooms: universalState.rooms,
      food: universalState.food,
      promos: universalState.promos,
      reviews: universalState.reviews
    });
  }
  res.json({
    outdated: false,
    version: universalState.version,
    updatedAt: universalState.updatedAt
  });
});

// 4. Admin Universal Controller: Save / Publish State for all users globally
app.post("/api/admin/save-state", (req, res) => {
  const body = req.body || {};
  if (body.settings) universalState.settings = { ...universalState.settings, ...body.settings };
  if (Array.isArray(body.rooms)) universalState.rooms = body.rooms;
  if (Array.isArray(body.food)) universalState.food = body.food;
  if (Array.isArray(body.promos)) universalState.promos = body.promos;
  if (Array.isArray(body.reviews)) universalState.reviews = body.reviews;

  persistState();

  // Also sync site-config.json on disk so static file exports match
  try {
    fs.writeFileSync(
      SITE_CONFIG_FILE,
      JSON.stringify(
        {
          version: universalState.version,
          lastPublished: universalState.updatedAt,
          settings: universalState.settings,
          rooms: universalState.rooms,
          food: universalState.food,
          promos: universalState.promos,
          reviews: universalState.reviews
        },
        null,
        2
      ),
      "utf-8"
    );
  } catch (e) {
    console.warn("Could not mirror site-config.json", e);
  }

  res.json({
    success: true,
    message: "Universal state successfully updated and broadcast to all devices",
    version: universalState.version,
    updatedAt: universalState.updatedAt,
    state: {
      settings: universalState.settings,
      rooms: universalState.rooms,
      food: universalState.food,
      promos: universalState.promos,
      reviews: universalState.reviews
    }
  });
});

// 5. Admin settings update endpoint
app.put("/api/admin/settings", (req, res) => {
  const newSettings = req.body || {};
  universalState.settings = { ...universalState.settings, ...newSettings };
  persistState();
  res.json({
    success: true,
    settings: universalState.settings,
    version: universalState.version
  });
});

// 6. Admin Room CRUD
app.post("/api/admin/rooms", (req, res) => {
  const room = req.body;
  if (!room || !room.title) {
    return res.status(400).json({ error: "Room title is required" });
  }
  const id = room.id || "r" + Date.now();
  const newRoom = { ...room, id };
  universalState.rooms.push(newRoom);
  persistState();
  res.json({ success: true, room: newRoom, rooms: universalState.rooms, version: universalState.version });
});

app.put("/api/admin/rooms/:id", (req, res) => {
  const id = req.params.id;
  const idx = universalState.rooms.findIndex((r) => String(r.id) === String(id));
  if (idx === -1) {
    return res.status(404).json({ error: "Room not found" });
  }
  universalState.rooms[idx] = { ...universalState.rooms[idx], ...req.body, id };
  persistState();
  res.json({ success: true, room: universalState.rooms[idx], rooms: universalState.rooms, version: universalState.version });
});

app.delete("/api/admin/rooms/:id", (req, res) => {
  const id = req.params.id;
  universalState.rooms = universalState.rooms.filter((r) => String(r.id) !== String(id));
  persistState();
  res.json({ success: true, rooms: universalState.rooms, version: universalState.version });
});

// 7. Admin Food CRUD
app.post("/api/admin/food", (req, res) => {
  const food = req.body;
  if (!food || !food.title) {
    return res.status(400).json({ error: "Food title is required" });
  }
  const id = food.id || "f" + Date.now();
  const newFood = { ...food, id };
  universalState.food.push(newFood);
  persistState();
  res.json({ success: true, food: newFood, foodList: universalState.food, version: universalState.version });
});

app.put("/api/admin/food/:id", (req, res) => {
  const id = req.params.id;
  const idx = universalState.food.findIndex((f) => String(f.id) === String(id));
  if (idx === -1) {
    return res.status(404).json({ error: "Food item not found" });
  }
  universalState.food[idx] = { ...universalState.food[idx], ...req.body, id };
  persistState();
  res.json({ success: true, food: universalState.food[idx], foodList: universalState.food, version: universalState.version });
});

app.delete("/api/admin/food/:id", (req, res) => {
  const id = req.params.id;
  universalState.food = universalState.food.filter((f) => String(f.id) !== String(id));
  persistState();
  res.json({ success: true, foodList: universalState.food, version: universalState.version });
});

// 8. Admin Promos & Reviews CRUD
app.post("/api/admin/promos", (req, res) => {
  const promo = req.body;
  if (!promo || !promo.code) {
    return res.status(400).json({ error: "Promo code required" });
  }
  universalState.promos = universalState.promos.filter((p) => p.code !== promo.code);
  universalState.promos.push(promo);
  persistState();
  res.json({ success: true, promos: universalState.promos, version: universalState.version });
});

app.delete("/api/admin/promos/:code", (req, res) => {
  const code = req.params.code;
  universalState.promos = universalState.promos.filter((p) => p.code !== code);
  persistState();
  res.json({ success: true, promos: universalState.promos, version: universalState.version });
});

app.post("/api/admin/reviews", (req, res) => {
  const review = req.body;
  if (!review || !review.name) {
    return res.status(400).json({ error: "Review name required" });
  }
  universalState.reviews.unshift(review);
  persistState();
  res.json({ success: true, reviews: universalState.reviews, version: universalState.version });
});

app.delete("/api/admin/reviews/:idx", (req, res) => {
  const idx = parseInt(req.params.idx, 10);
  if (idx >= 0 && idx < universalState.reviews.length) {
    universalState.reviews.splice(idx, 1);
    persistState();
  }
  res.json({ success: true, reviews: universalState.reviews, version: universalState.version });
});

// 9. Centralized Dynamic Bookings Management (All User Devices & Admin Console)
app.get("/api/bookings", (req, res) => {
  const userId = req.query.userId as string;
  if (userId) {
    // Return only this device/user's bookings
    const userBookings = universalState.bookings.filter((b) => b.userId === userId);
    return res.json({ success: true, bookings: userBookings, total: userBookings.length });
  }
  // Admin view - returns all bookings
  res.json({
    success: true,
    bookings: universalState.bookings,
    total: universalState.bookings.length,
    version: universalState.version
  });
});

app.post("/api/bookings", (req, res) => {
  const b = req.body;
  if (!b || !b.roomTitle || !b.guestName) {
    return res.status(400).json({ error: "Booking data missing required fields" });
  }

  // Ensure unique ID and Txn ID
  const id = b.id || "HDE-" + Math.floor(100000 + Math.random() * 900000);
  const txnId = b.txnId || "TXN-HDE-" + new Date().toISOString().slice(0, 10).replace(/-/g, "") + "-" + Math.floor(100000 + Math.random() * 900000);
  const createdAt = b.createdAt || new Date().toLocaleString();

  const newBooking = {
    ...b,
    id,
    txnId,
    status: b.status || "Pending Approval",
    createdAt
  };

  universalState.bookings.unshift(newBooking);
  persistState();

  res.json({
    success: true,
    message: "Reservation successfully registered in universal controller",
    booking: newBooking,
    version: universalState.version
  });
});

app.put("/api/bookings/:id/status", (req, res) => {
  const id = req.params.id;
  const { status, approvedAt } = req.body;
  const idx = universalState.bookings.findIndex((b) => String(b.id) === String(id));
  if (idx === -1) {
    return res.status(404).json({ error: "Booking not found" });
  }

  universalState.bookings[idx].status = status;
  if (approvedAt) {
    universalState.bookings[idx].approvedAt = approvedAt;
  }
  persistState();

  res.json({
    success: true,
    booking: universalState.bookings[idx],
    version: universalState.version
  });
});

app.delete("/api/bookings/:id", (req, res) => {
  const id = req.params.id;
  const userId = req.query.userId as string;

  if (userId) {
    // Individual user deletion from their own device
    universalState.bookings = universalState.bookings.filter(
      (b) => !(String(b.id) === String(id) && b.userId === userId)
    );
  } else {
    // Admin master deletion
    universalState.bookings = universalState.bookings.filter((b) => String(b.id) !== String(id));
  }

  persistState();
  res.json({ success: true, message: "Booking record removed", version: universalState.version });
});

// 10. Admin Reset / Seed Defaults
app.post("/api/admin/reset-defaults", (req, res) => {
  const def = getDefaultState();
  universalState.settings = def.settings;
  universalState.rooms = def.rooms;
  universalState.food = def.food;
  universalState.promos = def.promos;
  universalState.reviews = def.reviews;
  persistState();
  res.json({
    success: true,
    message: "Universal state reset to defaults",
    state: universalState,
    version: universalState.version
  });
});

// Vite middleware & Static file serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Universal Controller Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
