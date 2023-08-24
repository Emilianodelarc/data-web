const res = await fetch("https://script.google.com/macros/s/AKfycbyOXZ294HqsNbJs2EDJDyGDn8oBQp1mRB3bAaq-IY9d8ymnEzzRx84PJrnxVLEimw-mgA/exec")
const dat = await res.json()

export const datos = dat.datos
