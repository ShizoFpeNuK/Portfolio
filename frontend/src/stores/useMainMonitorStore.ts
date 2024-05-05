import { shallow } from "zustand/shallow";
import { devtools } from "zustand/middleware";
import { NAMES_STORES } from "./namesStores";
import { createWithEqualityFn } from "zustand/traditional";

type MainActives = "isHomeActive" | "isPlayActive";

type Actives = {
	[key in MainActives]: boolean;
} & Record<string, boolean>;

interface MainMonitorStore {
	actives: Actives;
	updateActive: (active: MainActives) => void;
}

const useMainMonitorStore = createWithEqualityFn<MainMonitorStore>()(
	devtools(
		(set, get) => ({
			actives: {
				isOffMonitor: false,
				isHomeActive: false,
				isPlayActive: false,
			},

			updateActive: (active) => {
				const actives = get().actives;

				for (let key in actives) {
					if (key !== active) {
						actives[key] = false;
					} else {
						actives[key] = true;
					}
				}

				set({ actives: { ...actives } }, false, "updateActive");
			},
		}),
		{
			name: NAMES_STORES.MAIN_MONITOR,
		},
	),
	shallow,
);

export default useMainMonitorStore;
