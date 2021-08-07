
export function getAngle(angle: number): string {

    if( angle < 90 ) return "Acute Angle";
    if( angle === 90 ) return "Right Angle";
    if( angle > 90 && angle < 180 ) return "Obtuse Angle";
    if( angle === 180 ) return "Straight Angle";
    if( angle > 180 && angle < 360 ) return "Reflex Angle";
    if( angle === 360 ) return "Full Rotation Angle";

    return "This number is not a valid angle";

}