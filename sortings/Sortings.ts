class Sorting {
	// Пузырькова сортировка. Временная сложность: O(n^2);
	public static bubbleSort(array: number[]): void {
		for(let partIndex = array.length - 1; partIndex > 0; partIndex--) {
			for(let i = 0; i < partIndex; i++) {
				if (array[i] > array[i + 1]) {
					Sorting.swap(array, i, i + 1);
				}
			}
		}
	}

	// Сортировка выборкой. Временная сложность: O(n^2);
	public static selectionSort(array: number[]): void {
		for(let partIndex = array.length - 1; partIndex > 0; partIndex--) {
			let largestAt = 0;
			for (let i = 0; i <= partIndex; i++) {
				if (array[i] > array[largestAt]) {
					largestAt = i;
				}
			}
			Sorting.swap(array, largestAt, partIndex);
		}
	}

	// Сортировка вставками. Временная сложность: O(n^2);
	public static insertionSort(array: number[]): void {
		for(let partIndex = 1; partIndex < array.length; partIndex++) {
			let currentUnsorted = array[partIndex];
			let index = 0;
			for(index = partIndex; index > 0 && array[index - 1] > currentUnsorted; index--) {
				array[index] = array[index - 1];
			}
			array[index] = currentUnsorted;
		}
	}

	// Сортировка подсчётом. Временная сложность: O(n^2);
	public static countingSort(array: number[]): void {
		let minimum = array[0];
		let maximum = array[0];
		for (let i = 0; i < array.length; i++) {
			if (array[i] > maximum) maximum = array[i];
			if (array[i] < minimum) minimum = array[i];
		}
		const bucket = new Array(maximum - minimum + 1).fill(0);
		for (let i = 0; i < array.length; i++) {
			bucket[array[i] - minimum]++;
		}
		array.length = 0;
		for (let i = 0; i < bucket.length; i++) {
			let count = bucket[i];
			for (let j = 0; j < count; j++) {
				array.push(i + minimum);
			}
		}
	}

    // Сортировка Шелла. Временная сложность: О(n^3/2);
	public static shellSort(array: number[]): void {
        let gap = 1;
        while (gap < array.length / 3) {
            gap = 3 * gap + 1;
        }
        while (gap >= 1) {
            for (let index = gap; index < array.length; index++) {
                for (let j = index; j >= gap && array[j] < array[j - gap]; j-= gap) {
                    Sorting.swap(array, j, j - gap);
                }
            }
            gap = Math.round(gap / 3);
        }
    }

    // Сортировка слиянием. Временная сложность: О(N * log N);
	public static mergeSort(array: number[]): number[] {
        if (array.length === 1) return array;
	
        const middle = Math.floor(array.length / 2);
        const arrLeft = array.slice(0, middle);
        const arrRight = array.slice(middle);
    
        return Sorting.merge(this.mergeSort(arrLeft), this.mergeSort(arrRight));
    }

	// Быстрая сортировка. Временная сложность: О(N * log N);
	public static quickSort(array: number[], left: number, right: number): number[] {
		let index;

		if (array.length > 1) {
			index = Sorting.partition(array, left, right);
			if (left < index - 1) {
				Sorting.quickSort(array, left, index - 1);
			}
			if (index < right) {
				Sorting.quickSort(array, index, right);
			}
		}

		return array;
	}

	private static swap(array: number[], i: number, j: number): void {
		if (i === j) return;
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	private static merge(arrFirst: number[], arrSecond: number[]): number[] {
		const arrSort: number[] = [];
		let i = 0, j = 0;

		while(i < arrFirst.length && j < arrSecond.length) {
			arrSort.push(
				(arrFirst[i] < arrSecond[j]) ?
				arrFirst[i++] : arrSecond[j++]
			);
		}

		return [...arrSort, ...arrFirst.slice(i), ...arrSecond.slice(j)];
	}

	private static partition(array: number[], left: number, right: number): any {
		const pivot = Math.floor((left + right) / 2);
		while(left <= right) {
			while(array[left] < pivot) {
				left++;
			}
			while(array[right] > pivot) {
				right--;
			}
			if (left <= right) {
				Sorting.swap(array, left, right);
				left++;
				right--;
			}
		}
		return left;
	}
}
