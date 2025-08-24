// Simple localStorage helper for game progress and final ROI.
export type GameProgress = {
  answers?: Record<number, any>;
  currentCategoryIndex?: number;
  currentScenarioInCategory?: number;
  profitAndLoss?: number;
  totalInvested?: number;
  attempted?: boolean;
};

const PROGRESS_KEY = 'gameProgress';
const FINAL_ROI_KEY = 'finalRoi';

export function loadGameProgress(): GameProgress | null {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as GameProgress;
  } catch (e) {
    console.error('loadGameProgress failed', e);
    return null;
  }
}

export function saveGameProgress(p: GameProgress) {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
  } catch (e) {
    console.error('saveGameProgress failed', e);
  }
}

export function clearGameProgress() {
  try {
    localStorage.removeItem(PROGRESS_KEY);
    localStorage.removeItem(FINAL_ROI_KEY);
  } catch (e) {
    console.error('clearGameProgress failed', e);
  }
}

export function saveFinalRoi(roi: string) {
  try {
    localStorage.setItem(FINAL_ROI_KEY, roi);
  } catch (e) {
    console.error('saveFinalRoi failed', e);
  }
}

export function loadFinalRoi(): string | null {
  try {
    return localStorage.getItem(FINAL_ROI_KEY);
  } catch (e) {
    console.error('loadFinalRoi failed', e);
    return null;
  }
}
