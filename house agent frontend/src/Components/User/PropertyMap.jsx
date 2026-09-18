import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";


// ==========================================
// FIX DEFAULT LEAFLET MARKER ICON
// ==========================================

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",

    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",

    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});


function PropertyMap({
    latitude,
    longitude,
    title,
    location,
}) {

    // ==========================================
    // CONVERT COORDINATES
    // ==========================================

    const lat = Number(latitude);
    const lng = Number(longitude);


    // ==========================================
    // CHECK LOCATION
    // ==========================================

    const invalidCoordinates =
        latitude === undefined ||
        latitude === null ||
        longitude === undefined ||
        longitude === null ||
        !Number.isFinite(lat) ||
        !Number.isFinite(lng) ||
        lat < -90 ||
        lat > 90 ||
        lng < -180 ||
        lng > 180;


    if (invalidCoordinates) {
        return (
            <div
                className="
                    flex
                    min-h-[300px]
                    w-full
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-10
                    text-gray-400
                    sm:min-h-[400px]
                    lg:min-h-[450px]
                "
            >

                <div className="text-center">

                    <div
                        className="
                            mx-auto
                            mb-4
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-full
                            bg-green-500/10
                        "
                    >
                        <i
                            className="
                                fa
                                fa-map-marker
                                text-3xl
                                text-green-400
                            "
                        />
                    </div>

                    <p className="text-sm sm:text-base">
                        Location coordinates are not available.
                    </p>

                </div>

            </div>
        );
    }


    return (
        <div
            className="
                h-[300px]
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                sm:h-[400px]
                lg:h-[450px]
            "
        >

            <MapContainer
                center={[lat, lng]}
                zoom={13}
                scrollWheelZoom={true}
                className="h-full w-full"
                aria-label={`Map showing the location of ${title}`}
            >

                {/* =====================================
                    OPEN STREET MAP
                ====================================== */}

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


                {/* =====================================
                    PROPERTY MARKER
                ====================================== */}

                <Marker position={[lat, lng]}>

                    <Popup>

                        <div className="min-w-[180px] text-black">

                            <h3 className="text-base font-bold">
                                {title}
                            </h3>

                            <p className="mt-1 text-sm text-gray-600">
                                {location}
                            </p>

                        </div>

                    </Popup>

                </Marker>

            </MapContainer>

        </div>
    );
}

export default PropertyMap;