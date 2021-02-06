---
title: "Fluxbox"
date: "2021-01-15"
draft: false
author: "Marco Cadete"
featuredImage: "/img/posts/fluxbox_wm.png"
featured: true
summary: "An introduction to what I think is the most underated window manager."
categories: ["Linux", "Window Manager"]
---

### The most underated window manager?

Do you know Fluxbox? In my opinion, one of the most underrated window managers around.

##### What I'll be covering in this article:
1. What Fluxbox is, a bit of history for those who don't know.
2. What I personally really like about it.
3. Features.
4. Why I think it's underated.

#### So what is Fluxbox?
It's a window manager for X that was based on the Blackbox 0.61.1 code. It is very light on resources and easy to handle but yet full of features to make an easy, and extremely fast, desktop experience. It is built using C++ and licensed under the [MIT License](https://en.wikipedia.org/wiki/MIT_License)  

#### What I personally really like about it
***Easy***, ***Highly configurable***, ***Lightweight***, and ***Stable***.  

The first thing that stood out for me when trying Fluxbox for the first time, was how all the configuration files were separated into names matching their purpose, which made it super easy to understand and configure.  

The config files are stored in the home directory, inside a hidden folder called **fluxbox**.  

###### Some files inside the fluxbox folder:

```bash
~/.fluxbox $ tree

.
|__ \
|__ apps
|__ init
|__ keys
|__ lastwallpaper
|__ menu
|__ slitlist
|__ startup
|__ styles

```

Once I opened a config file, I quickly noticed how easy it was to understand.
 In my opinion, it's hands down the easiest window manager to configure, but make no mistake, that doesn't mean it's not powerful and feature-rich.  

The syntax of the configuration files are well-formed, which makes it easy to start configuring your window manager. I had mine working to my liking in minutes.

###### An extract from the keys file:
```python
1 # Run programs
2 Mod4 :Exec firefox
3 Mod4 Shift Return :Exec alacritty
4
5 # Pulse Audio
6 XF86AudioRaiseVolume :Exec pactl -- set-sink-volume 0 +3%
7 XF86AudioLowerVolume :Exec pactl -- set-sink-volume 0 -3%
8 XF86AudioMute :Exec pactl -- set-sink-mute 0 toggle
9
10 # Change to Specific workspace
11 Mod4 :Workspace 1
12
13 # Send the current window to a specific workspace
14 Mod4 1 :SendToWorkspace 1
15
16 # Send the current window and change to a specific workspace
17 Control Mod4 1 :TakeToWorkspace 1
18
19 # Auto arranage windows
20 Control Mod4 v :ArrangeWindowsVertical
21 Control Mod4 h :ArrangeWindowsHorizontal
22
23 # The currently focussed window is used as the main window,
24 # and will fill half the screen, while the other windows are tiled on the other half
25 Control Mod4 l :ArrangeWindowsStackLeft
```

**ArrangeWindowStack*** options are heavenly. I highly recommend trying them out. By pressing two keys, my windows stack perfectly, one main window taking up 50% on the left and all other windows stacked to the right.

###### ArrangeWindowsStackRight
![Fluxbox Tiling](/img/posts/Fluxbox_Tiling.jpg)

It’s really lightweight, by far the lightest window manager I have tested, and stable too. As can be seen in the screenshot below, the CPU and memory consumption are very low. An average of 470M of RAM being used.

###### HTOP screenshot
![Fluxbox HTOP](/img/posts/fluxbox_CPU.png)

#### What you can do with it
Fluxbox has lot's of options such as:
- **Tabbing**
- **Grouping**
- **Tiling**
- **Stickiness**
- **Key Commands**
- **Fully editable menu**
- **Application specific parameters** 

let me elaborate...  

##### Tabs  

Tabbing is an awesome feature that allows you to tab windows together. This can be combined with the "autogrouping" feature that is provided via the apps file, which will make certain applications tab together by default.  

![Tabbing](/img/posts/gifs/tabbing.gif)  

##### Grouping
Setting automatic grouping using the 'apps' file.
```python
~/.fluxbox/apps
# A group for editing
[group]
    [app] (name=gimp) (role=gimp-dock)
    [app] (name=) (role=gimp-toolbox)
    [Layer] {4}
[end]
```
  

##### Tiling
I’ve used many tiling window managers, and tiling is just one of those features I can’t do without. Organizing your screen into non-overlapping windows, instead of overlapping is great.  

It keeps your screen organized and allows you to multitask efficiently. Fluxbox already has pre-configured commands that allow for vertical and horizontal window arrangements.  

But wait there's more, with the right and left stack window arrangements you need not look any further.


![Tiling](/img/posts/gifs/tiling.gif)  

##### Stickiness
One of my favorite features is stickiness. With this feature, you’ll be able to press a button situated on the top left corner of the window’s tab. The icon size will enlarge when activated, then when switching to another workspace, the window follows you and stays in the same position it was in on the previous window.


![Stickiness](/img/posts/stickyness.png)

##### Key Commands
The keys file is where all your keyboard key commands and mouse click and gestures can be configured.

##### Root Menu
Is the menu that appears on a right-click **anywhere** on the desktop. It’s fully customizable.  


![Root Menu](/img/posts/root_menu.png)

##### Tool bar
Is a bar normally at the bottom by default, that shows all the windows on the desktop. It also contains helpful tools such as the current workspace name, a clock, the system tray, and some buttons to switch between workspaces and windows.  


![Toolbar](/img/posts/toolbar.png)


##### System Tray  

Unlike some lightweight window managers, Fluxbox comes with its own system tray. Applications applets are displayed as little icons in the tray  


![System Tray](/img/posts/system_tray.png)

##### Slit
The Slit is often confused with the toolbar. The slit is a dock for any application that can be 'dockable'. A docked application is anchored and appears on every workspace.  

It cannot be moved freely and is not influenced by any manipulation to windows. Dock apps that are useful in such a situation tend to be clocks, system monitors, weather apps, and so on. Not a feature I use, but it's there if you need it.  


##### Application specific parameters  

It will let you manipulate almost any setting for any window or application. The dimension, decoration, default workspace to open on, stickiness, and much more.  


![App Specific Settings](/img/posts/app-specific-settings.png)  

##### So why do I think it's underated  

Well, my first reason is that it’s not heard of much in the open-source community. If you search on the internet or even Youtube for ‘Fluxbox’ you will find outdated articles and videos.  

Few talk about it or recommend it, not sure if many even know it exists. How I came to know of Fluxbox was through MX Linux, they have an edition based on Fluxbox.  

Secondly, Fluxbox’s documentation and website are not that appealing nor are they easy to navigate. This could potentially lead many astray. My first impression when browsing through their website and their wiki was that this project might be abandoned or something of the sort.  


##### Final thoughts  
I hope I got you excited to at least give Fluxbox a try and if you do try it and find it awesome, like I do, then please let others know about it too. I will be reaching out to their team to thank them and to offer a helping hand with what I can. As It would be sad to see this project fade away.
