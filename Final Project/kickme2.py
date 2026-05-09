import tkinter as tk
import time
import random

class kickMe:
    def __init__(self):
        self.window = tk.Tk()
        self.window.title("Kick Me")
        self.window.geometry("300x220") 
        self.window.configure(bg="white")

        # 状态变量
        self.state = "idle"
        self.trial = 0
        self.reactionTimes = []
        self.greenTime = None         
        self.afterId = None          

        # 中心文字
        self.label = tk.Label(
            self.window,
            text="Click anywhere to start",
            font=("Arial", 14, "bold"),
            bg="white",
            fg="black",
            wraplength=280
        )
        self.label.pack(expand=True)

        self.window.bind("<Button-1>", self.onClick)

    #star
    def startGame(self):             
        self.trial = 0
        self.reactionTimes.clear()
        self.nextTrial()

    #times
    def nextTrial(self):               
        if self.trial >= 3:
            self.showResult()
            return

        self.state = "red"
        self.window.configure(bg="red")
        self.label.configure(text="Wait...", bg="red", fg="white")

    #时间,红色部分
        delayMs = random.randint(1000, 4000)
        self.afterId = self.window.after(delayMs, self.turnGreen)

    def turnGreen(self):            
        self.state = "green"
        self.window.configure(bg="green")
        self.label.configure(text="Kick me!", bg="green", fg="white")
        self.greenTime = time.time()
        self.afterId = None

    def showResult(self):          
        self.state = "result"
        avg = sum(self.reactionTimes) / len(self.reactionTimes)

        # 评价
        if avg < 200:
            comment = "Forget music.\nGo win some FPS championships."
        elif 200 <= avg < 300:
            comment = "Average.\nJust another boring human."
        elif 300 <= avg < 400:
            comment = "You suck.\nEven a caffeinated sloth could beat you."
        else:
            comment = "Never play an FPS game.\nLike, ever."

        self.window.configure(bg="white")
        self.label.configure(
            text=f"Average: {avg:.0f} ms\n{comment}\n\nKick me to retry",
            bg="white",
            fg="black"
        )

    def onClick(self, event):
        if self.state == "idle": #空闲
            self.startGame()
            return

        if self.state == "result": #结果
            self.startGame()
            return

        if self.state == "red": #红色等待,过早
            if self.afterId:
                self.window.after_cancel(self.afterId)
                self.afterId = None
            self.label.configure(text="Too early!", bg="red", fg="white")
            self.window.after(800, self.nextTrial)

        elif self.state == "green": #绿色,正确
            reaction = (time.time() - self.greenTime) * 1000
            self.reactionTimes.append(reaction)
            self.trial += 1
            self.label.configure(text=f"{reaction:.0f} ms", bg="green", fg="white")
            self.state = "red"
            self.window.after(500, self.nextTrial)

    def run(self):
        self.window.mainloop()

if __name__ == "__main__":
    game = kickMe()
    game.run()