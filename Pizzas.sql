USE [DAI-Pizzas]
GO
/****** Object:  User [alumno]    Script Date: 29/5/2023 09:49:03 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [Pizzas]    Script Date: 29/5/2023 09:49:03 ******/
CREATE USER [Pizzas] FOR LOGIN [Pizzas] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [Pizzas]
GO
/****** Object:  Table [dbo].[Ingredientes]    Script Date: 29/5/2023 09:49:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ingredientes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](150) NOT NULL,
 CONSTRAINT [PK_Ingredientes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[IngredientesXPizzas]    Script Date: 29/5/2023 09:49:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IngredientesXPizzas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdPizza] [int] NOT NULL,
	[IdIngrediente] [int] NOT NULL,
	[Cantidad] [int] NOT NULL,
	[IdUnidad] [int] NOT NULL,
 CONSTRAINT [PK_IngredientesXPizzas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Pizzas]    Script Date: 29/5/2023 09:49:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pizzas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](150) NULL,
	[LibreGluten] [bit] NULL,
	[Importe] [float] NULL,
	[Descripcion] [varchar](max) NULL,
 CONSTRAINT [PK_Pizzas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Unidades]    Script Date: 29/5/2023 09:49:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Unidades](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](150) NOT NULL,
 CONSTRAINT [PK_Unidades] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Ingredientes] ON 

INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (1, N'Queso Muzzarella')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (2, N'Cebolla')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (3, N'Salsa Carbonara')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (4, N'Huevo')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (5, N'Queso Parmesano')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (6, N'Panceta')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (7, N'Salsa de Tomate')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (8, N'Albahaca')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (9, N'Anchoas')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (10, N'Oregano')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (11, N'Aceitunas')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (12, N'Alcaparras')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (13, N'Queso Gongonzola')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (14, N'Jamon Cocido')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (15, N'Jamon Crudo')
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (16, N'Queso Provolone')
SET IDENTITY_INSERT [dbo].[Ingredientes] OFF
GO
SET IDENTITY_INSERT [dbo].[IngredientesXPizzas] ON 

INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (1, 1, 1, 1, 1)
INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (2, 2, 1, 1, 1)
INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (3, 2, 2, 100, 2)
INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (4, 3, 3, 1, 1)
INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (5, 3, 4, 1, 1)
INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (6, 3, 5, 1, 1)
INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (7, 3, 2, 100, 2)
INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (8, 3, 6, 50, 2)
SET IDENTITY_INSERT [dbo].[IngredientesXPizzas] OFF
GO
SET IDENTITY_INSERT [dbo].[Pizzas] ON 

INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (1, N'Pizza Muzzarella', 0, 800.5, N'Pizza con queso Muzzarella.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (2, N'a', 1, 1, N'1')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (3, N'Pizza Carbonara', 1, 1540.5, N'Salsa carbonara: huevo, queso parmesano, sal y pimienta. Cebolla, bacon (kevin) y queso rallado por encima, ya que por debajo no se ve.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (4, N'Pizza Margarita', 1, 1450, N'Salsa de tomate, mozzarella, albahaca, orégano y aceite de oliva. Viene con un mentoplus de regalo.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (5, N'Pizza Napolitana', 0, 1270, N'Salsa de tomate, queso mozzarella, anchoas, orégano, alcaparras y aceite de oliva. Un corcho de obsequio para cuando vas al excusado.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (6, N'Pizza Cuatro Quesos', 1, 1380, N'El queso fontina, originario del Valle de La garompiña; el queso gorgonzola, natural de Milán; el queso parmesano, originario de la ciudad de Parma; y el queso mozzarella del supermercado DIA.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (7, N'Pizza con Jamon', 0, 1210, N'Pizza con queso Muzzarella, se le agrega Jamon y te cobro el doble.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (8, N'Pizza con Rucula y Provolone', 1, 1380, N'Riquisima Pizza a la piedra, con queso provolone. Con el aliento de dragon que te queda aflojas un tornillo del puente Alsina.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (9, N'Pizza Picante.', 1, 1400, N'Masa fina, queso del mercadito de la esquina, aji mejicano recontra picante. ATENCION: Cuando vas al baño se te incendia el papel higienico.')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (10, N'a', 1, 1, N'1')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (11, N'a', 1, 1, N'1')
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (12, N'Juan', 1, 1, N'1')
SET IDENTITY_INSERT [dbo].[Pizzas] OFF
GO
SET IDENTITY_INSERT [dbo].[Unidades] ON 

INSERT [dbo].[Unidades] ([Id], [Nombre]) VALUES (1, N'Unidad')
INSERT [dbo].[Unidades] ([Id], [Nombre]) VALUES (2, N'Gramos')
INSERT [dbo].[Unidades] ([Id], [Nombre]) VALUES (3, N'Litros')
SET IDENTITY_INSERT [dbo].[Unidades] OFF
GO
ALTER TABLE [dbo].[IngredientesXPizzas]  WITH CHECK ADD  CONSTRAINT [FK_IngredientesXPizzas_Ingredientes] FOREIGN KEY([IdIngrediente])
REFERENCES [dbo].[Ingredientes] ([Id])
GO
ALTER TABLE [dbo].[IngredientesXPizzas] CHECK CONSTRAINT [FK_IngredientesXPizzas_Ingredientes]
GO
ALTER TABLE [dbo].[IngredientesXPizzas]  WITH CHECK ADD  CONSTRAINT [FK_IngredientesXPizzas_Pizzas] FOREIGN KEY([IdPizza])
REFERENCES [dbo].[Pizzas] ([Id])
GO
ALTER TABLE [dbo].[IngredientesXPizzas] CHECK CONSTRAINT [FK_IngredientesXPizzas_Pizzas]
GO
ALTER TABLE [dbo].[IngredientesXPizzas]  WITH CHECK ADD  CONSTRAINT [FK_IngredientesXPizzas_Unidades] FOREIGN KEY([IdUnidad])
REFERENCES [dbo].[Unidades] ([Id])
GO
ALTER TABLE [dbo].[IngredientesXPizzas] CHECK CONSTRAINT [FK_IngredientesXPizzas_Unidades]
GO
/****** Object:  StoredProcedure [dbo].[Pizzas_DeleteById]    Script Date: 29/5/2023 09:49:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[Pizzas_DeleteById]
	-- Add the parameters for the stored procedure here
	@idPizza int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	DELETE FROM Pizzas WHERE Id = @idPizza;
END
GO
/****** Object:  StoredProcedure [dbo].[Pizzas_Insertar]    Script Date: 29/5/2023 09:49:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[Pizzas_Insertar] 
	-- Add the parameters for the stored procedure here
	@nombre varchar(MAX),
	@libreGluten bit,
	@importe float,
	@descripcion varchar(MAX)


AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
		INSERT INTO Pizzas ( Nombre  , LibreGluten   , Importe   , Descripcion) VALUES (@nombre , @libreGluten  , @importe  , @descripcion);
END
GO
/****** Object:  StoredProcedure [dbo].[Pizzas_ObtenerPorId]    Script Date: 29/5/2023 09:49:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[Pizzas_ObtenerPorId]
	@idPizza INT
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	SELECT Id, Nombre, LibreGluten, Importe, Descripcion FROM Pizzas WHERE Id = @idPizza;
END
GO
/****** Object:  StoredProcedure [dbo].[Pizzas_ObtenerTodos]    Script Date: 29/5/2023 09:49:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[Pizzas_ObtenerTodos]
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;


	SELECT	
		[Id]			,
		[Nombre]		,
		[LibreGluten]	,
		[Importe]		,
		[Descripcion]	
	FROM [Pizzas]
END
GO
/****** Object:  StoredProcedure [dbo].[Pizzas_UpdatePorID]    Script Date: 29/5/2023 09:49:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[Pizzas_UpdatePorID]
	-- Add the parameters for the stored procedure here
		@nombre varchar(MAX),
	@libreGluten bit,
	@importe float,
	@descripcion varchar(MAX),
	@idPizza int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	UPDATE Pizzas SET  Nombre = @nombre, LibreGluten = @libreGluten, Importe = @importe,Descripcion = @descripcion WHERE Id = @idPizza

END
GO
