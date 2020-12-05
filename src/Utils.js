export const arrayBufferToBase64 = (buffer) => {
	let binary = "";
	const bytes = [].slice.call(new Uint8Array(buffer));
	bytes.forEach((b) => binary += String.fromCharCode(b));
	return window.btoa(binary);
};

export const parseTimeString = time => {
	let hour = parseInt(time.substring(11, 13)) + 5;
	let minute = parseInt(time.substring(14, 16)) + 30;

	if (hour < 10) hour = `0${hour}`;
	if (minute < 10) minute = `0${minute}`;

	let year = time.substring(0, 4);
	let month = time.substring(5, 7);
	let day = time.substring(8, 10);

	const fullDateString = `${hour}:${minute}\xa0\xa0\xa0\xa0\xa0\xa0\xa0${day}/${month}/${year}`;

	return { year, month, day, hour, minute, fullDateString };
};
