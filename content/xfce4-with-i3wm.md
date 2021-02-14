---
title: "Xfce4 with i3"
date: "2021-02-14"
draft: false
author: "Marco Cadete"
featuredImage: "/img/posts/xfce4-with-i3.jpg"
featured: true
summary: "The best of both worlds, a popular lightweight desktop environment with a tiling window manager."
categories: ["Xfce4", "i3", "Linux", "Window Manager"]
---

### Xfce4 and i3, a match made in heaven.
Did you ever wish you could enjoy using your favorite desktop environment with your favorite tiling window manager? Well, where there’s a will there’s a way.  

Now, Xfce4 and i3 might not be your favorites, and in that case, this might not be interesting to you. But for those who are interested, I will show you how I got these two working in harmony together.  

##### What I'll be covering in this article:
1. Why I decided to combine Xfce4 with i3.
2. Steps to get i3 working in Xfce4.
3. My experience using this setup.

##### So why use Xfce4 with i3?
I've always liked Xfce, but after trying a tiling window manager I couldn't go back to stacking window managers. I enjoyed using i3, but it quickly became apparent that I was missing a lot of cool built-in functionality that a desktop environment such as Xfce4 provides.  

So after a few "hacks" (basically, me just trying various options), I managed to get it working quite harmoniously.  

##### Steps to get it working.  

###### 1. Install Xfce4, i3, Nitrogen and Picom

I would suggest you install a distro that has Xfce4. Or, if you have a base install of your preferred distro, then you'd need to install Xfce4 and i3. I installed [i3-gaps](https://github.com/Airblader/i3), as I like having the options of gaps between my windows.  

Additional software you might want is [Nitrogen](https://wiki.archlinux.org/index.php/nitrogen), which will allow you to select wallpapers for your desktop. You will probably also want a compositor, I recommend [Picom](https://wiki.archlinux.org/index.php/Picom), a standalone compositor for Xorg, suitable for use with window managers. This will allow you to set background opacity on terminals.

Once you have Xfce4, i3, or i3-gaps and Nitrogen installed, then login to Xfce4.  

###### 2. Disabling xfwm and xfdesktop

You will be replacing ***xfwm*** (Xfce window manager) with ***i3***, and ***xfdesktop*** (desktop manager) with ***Nitrogen***.  

Open your Xfce4 settings window and select ***Session and Startup***.

![Xfce4 Session and Startup](/img/posts/xfce4-session-and-startup.jpg)  

Select ***Current Session***, and locate the program ***xfwm4***. On the right where it says ***Restart Style*** click on the text ***Immediately***. A drop down will open, then select ***Never***. You will need to repeat this step with ***xfdesktop***. So they should both read ***Never*** under ***Restart Style***.  

![Xfce4 Current Session](/img/posts/xfce4-current-session.jpg)  

###### 3. Creating Startup applications

* Select ***Application Autostart***  

![Xfce4 Startup Applications](/img/posts/xfce4-add-startup-app.jpg)  

* Click on the "+" ***add button***, an ***Add application*** window will open.  

* In the name input, enter "i3wm", and in the description enter "i3 window manager". The name and description can be whatever you want, It's not that important. The command input is important and has to be the command you would run in the CLI (command line interface) to start i3. So in my case, I would enter "i3". Make sure that ***Trigger*** is set to ***on login***.
* Add more applications as needed to have them auto-start on startup. I added Nitrogen and Picom.  

![Xfce4 Startup Application Nitrogen](/img/posts/xfce4-add-startup-app-nitrogen.jpg)  

###### 4. Removing default Xfce4 key bindings.
Remove Xfce4's default key bindings, so that they don't conflict with i3's key bindings.  

* Open your ***Keyboard*** options in Xfce4 settings.
* Select ***Application Shortcuts***.
* Remove all shortcuts.  

![Xfce4 Keyboard Shortcuts](/img/posts/xfce4-keyboard-shortcuts.jpg)

###### 5. Reboot!
That's it. You should be able to login to Xfce4 with i3 as your window manager.

###### 6. i3 Config
Once you have logged in, the i3 setup runs and you can select your preferred options. You will need to disable the i3 bar, so that it won't display, because you want the xfce4-panel instead.  

```bash
$ vim ~/.config/i3/config
```

* Open the i3 config file which should be located in your home directory, and locate ***bar***. Remove or comment it out. Then restart i3 by pressing mod+Shift+r or logout of your desktop environment. That should remove the i3 bar.  

```bash
# bar {
#    status_command i3status
# }
```

##### My experience so far

I have been using Xfce4 with i3-gaps for a week now and I have no complaints.
It has been really rewarding and my productivity has benefited substantially.  

If you have any questions or need help, feel free to send me an email.
