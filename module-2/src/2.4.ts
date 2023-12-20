{
    //
    // Interface Generic
    interface Developer<T, X > {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        };
        smartWatch: T;
        bike? : X
    };

    type EmileWatch = {
        brand: string;
        model: string;
        display: string
    }

    const poorDeveloper: Developer<EmileWatch, null> = {
        name: "raihan",
        computer: {
            brand: "asus",
            model: "abc",
            releaseYear: 2013
        },
        smartWatch: {
            brand: "Emile",
            model: "a1",
            display: "b1"
        }
    };

    interface OledWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleeptrack: boolean
    }
    interface YahamaBike {
        model: string;
        capacity: string
    }
    const richDeveloper: Developer<OledWatch, YahamaBike> = {
        name: "Mezba",
        computer: {
            brand: "apple",
            model: "abc",
            releaseYear: 2016
        },
        smartWatch: {
            brand: "OLED",
            model: "a1",
            heartTrack: true,
            sleeptrack: false,
        },
        bike: {
            model: "Yahama",
            capacity: "160"
        }
    }




    // 
}