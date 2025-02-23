export const delaySubpageImport = (importFunc: () => Promise<any>, delay: number) => {
	return new Promise<any>(resolve => {
		setTimeout(() => {
			resolve(importFunc());
		}, delay);
	});
};
